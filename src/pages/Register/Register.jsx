import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../authSlice"; // Ajusta según tu ruta
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const initialValues = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .required("El nombre es requerido")
      .min(3, "El nombre debe tener al menos 3 caracteres"),

    correo: Yup.string()
      .required("El correo es requerido")
      .email("El correo no es válido"),

    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(50, "La contraseña tiene un máximo de 50 caracteres"),

    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("La confirmación de la contraseña es requerida"),
  });

  const onSubmit = (values, { setFieldError }) => {
    console.log("✅ Enviando formulario", values);

    dispatch(registerUser(values))
      .then((response) => {
        console.log("🟢 Respuesta del registerUser:", response);
        if (response.type === "auth/registerUser/fulfilled") {
          navigate("/Welcome");
        } else if (response.payload && response.payload.errors) {
          Object.entries(response.payload.errors).forEach(([key, value]) => {
            setFieldError(key, value[0]);
          });
        }
      })
      .catch((error) => {
        console.error("❌ Error al registrar:", error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Regístrate Ahora</h2>
        <p>Crea una cuenta para continuar.</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>Correo</label>
                <input
                  type="email"
                  name="correo"
                  value={values.correo}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />
                {errors.correo && <span className="error">{errors.correo}</span>}
              </div>

              <div className="form-group">
                <label>Nombre</label>
               <input
  type="text"
  name="name"
  value={values.name}
  onChange={handleChange}
/>
                {errors.nombre && <span className="error">{errors.nombre}</span>}
              </div>

              <div className="form-group">
                <label>Contraseña</label>
              <input
  type="email"
  name="email"
  value={values.email}
  onChange={handleChange}
/>
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label>Confirmar Contraseña</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={values.password_confirmation}
                  onChange={handleChange}
                  placeholder="********"
                />
                {errors.password_confirmation && (
                  <span className="error">{errors.password_confirmation}</span>
                )}
              </div>

              <button type="submit">Registrarse</button>
            </form>
          )}
        </Formik>

        <p className="signup-text">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="signup-link">
            Inicia sesión
          </Link>
        </p>
      </div>

      <div className="login-image">
        <img src="/public/MI.png" alt="MI" className="login-img" />
      </div>
    </div>
  );
};

export default Register;
