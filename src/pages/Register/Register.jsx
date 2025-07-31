import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Formik } from "formik";
import InputLabel from "../../components/Input/InputLabel";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
@@ -15,13 +22,16 @@ const Register = () => {
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
@@ -34,106 +44,76 @@ const Register = () => {
      showConfirmButton: false,
      timer: 1500,
    });

    resetForm();

    // Si quieres navegar, descomenta la siguiente línea:
    // setTimeout(() => navigate("/Welcome"), 1600);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Regístrate Ahora</h2>
      <p>Crea una cuenta para continuar.</p>
    <div className="login-container">
      <div className="login-form">
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
                type="email"
                placeholder="example@gmail.com"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
              <InputLabel
                label="Nombre"
                name="name"
                type="text"
                placeholder="Aiton Balam"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
                value={values.name}
              />
              {touched.name && errors.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
              <InputLabel
                label="Contraseña"
                name="password"
                type="password"
                placeholder="********"
                value={values.password}
                type="password"
                error={errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="password_confirmation">Confirmar Contraseña</label>
              <input
                id="password_confirmation"
              <InputLabel
                label="Confirmar Contraseña"
                name="password_confirmation"
                type="password"
                placeholder="********"
                value={values.password_confirmation}
                type="password"
                error={errors.password_confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", padding: 8 }}
                value={values.password_confirmation}
              />
              {touched.password_confirmation && errors.password_confirmation && (
                <div style={{ color: "red" }}>{errors.password_confirmation}</div>
              )}
            </div>
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
      <div className="login-image">
        <img src="/public/MI.png" alt="MI" className="login-img" />
      </div>
    </div>
  );
};
