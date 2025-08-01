import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Formik } from "formik";
import InputLabel from "../../components/Input/InputLabel";
import Button from "../../components/Button/Button";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const baseURL = import.meta.env.PROD
        ? "https://backend-mi-1.onrender.com"
        : "";

      const response = await axios.post(`${baseURL}/api/auth/login`, values, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // Suponiendo que backend responde con token o user data
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Guardar token o user info si quieres (localStorage, context, etc)
      // localStorage.setItem('token', response.data.token);

      // Redirigir según rol o ruta general
      navigate("/dashboard");
    } catch (error) {
      let mensaje = "Correo o contraseña incorrectos";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        mensaje = error.response.data.message;
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
              <InputLabel
                label="Correo Electrónico"
                name="email"
                placeholder="Ingrese su correo"
                onChange={handleChange}
                value={values.email}
              />
              <InputLabel
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={handleChange}
                value={values.password}
              />
              <Button
                value={loading ? "Validando..." : "Ingresar"}
                type="submit"
                disabled={loading}
              />
            </form>
          )}
        </Formik>
      </div>

      <div className="login-image">
        <img src="/public/MI.png" alt="Imagen" className="login-img" />
      </div>
    </div>
  );
};

export default Login;
