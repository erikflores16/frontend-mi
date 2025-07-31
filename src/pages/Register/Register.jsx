import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Register = () => {
  const initialValues = {
    email: "",
    name: "",
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

  const onSubmit = (values, { resetForm }) => {
    Swal.fire({
      icon: "success",
      title: "¡Usuario agregado correctamente!",
      showConfirmButton: false,
      timer: 1500,
    });
    resetForm();
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Regístrate Ahora</h2>
      <p>Crea una cuenta para continuar.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: 10 }}>
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
              />
              {touched.email && errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Aiton Balam"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
              />
              {touched.name && errors.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
              />
              {touched.password && errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="password_confirmation">Confirmar Contraseña</label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="********"
                value={values.password_confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
              />
              {touched.password_confirmation && errors.password_confirmation && (
                <div style={{ color: "red" }}>{errors.password_confirmation}</div>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              Registrarse
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
