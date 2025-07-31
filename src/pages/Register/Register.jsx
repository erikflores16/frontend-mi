import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Formik } from "formik";
import InputLabel from "../../components/Input/InputLabel";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("El nombre es requerido")
      .min(3, "El nombre debe tener al menos 3 caracteres"),
    email: Yup.string()
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

  const onSubmit = async (values, { resetForm }) => {
    try {
await axios.post("https://backend-mi-1.onrender.com/api/auth/register", {
  name: values.name,
  email: values.email,
  password: values.password,
  password_confirmation: values.password_confirmation,
});


      Swal.fire({
        icon: "success",
        title: "¡Usuario agregado correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });

      resetForm();
      // setTimeout(() => navigate("/Welcome"), 1600);
    } catch (error) {
      console.error("Error al registrar usuario:", error.response?.data || error.message);
      Swal.fire({
        icon: "error",
        title: "Error al registrar",
        text: error.response?.data.message || "Verifica que los datos sean válidos o que el backend esté disponible.",
      });
    }
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
            <form onSubmit={handleSubmit}>
              <InputLabel
                label="Correo"
                name="email"
                placeholder="example@gmail.com"
                error={errors.email}
                onChange={handleChange}
                value={values.email}
              />
              <InputLabel
                label="Nombre"
                name="name"
                placeholder="Aiton Balam"
                error={errors.name}
                onChange={handleChange}
                value={values.name}
              />
              <InputLabel
                label="Contraseña"
                name="password"
                placeholder="********"
                type="password"
                error={errors.password}
                onChange={handleChange}
                value={values.password}
              />
              <InputLabel
                label="Confirmar Contraseña"
                name="password_confirmation"
                placeholder="********"
                type="password"
                error={errors.password_confirmation}
                onChange={handleChange}
                value={values.password_confirmation}
              />
              <Button value="Registrarse" type="submit" />
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
