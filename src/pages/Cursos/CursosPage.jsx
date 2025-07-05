import React, { useState } from "react";
import "./CursosPage.css";

const cursos = [
  {
    nombre: "Introducción a PHP",
    descripcion: "Aprende los fundamentos de PHP para desarrollo web backend.",
    imagen: "/curso-php.jpg",
    link: "https://ejemplo.com/curso-php",
  },
  {
    nombre: "Introducción a JavaScript",
    descripcion: "Domina los conceptos básicos y la programación en JavaScript.",
    imagen: "/curso-javascript.jpg",
    link: "https://ejemplo.com/curso-javascript",
  },
  {
    nombre: "Introducción a Bases de Datos",
    descripcion: "Conoce SQL y cómo gestionar bases de datos relacionales.",
    imagen: "/curso-bd.jpg",
    link: "https://ejemplo.com/curso-bd",
  },
  {
    nombre: "Introducción a Excel",
    descripcion: "Maneja hojas de cálculo, fórmulas y análisis de datos con Excel.",
    imagen: "/curso-excel.jpg",
    link: "https://ejemplo.com/curso-excel",
  },
  {
    nombre: "Introducción a Word",
    descripcion: "Aprende a crear y formatear documentos profesionales.",
    imagen: "/curso-word.jpg",
    link: "https://ejemplo.com/curso-word",
  },
  {
    nombre: "Introducción al Diseño Web",
    descripcion: "Aprende HTML, CSS y los principios del diseño responsivo.",
    imagen: "/curso-diseno-web.jpg",
    link: "https://ejemplo.com/curso-diseno-web",
  },
  {
    nombre: "Fotografía Digital Básica",
    descripcion: "Captura mejores fotos con técnicas profesionales simples.",
    imagen: "/curso-fotografia.jpg",
    link: "https://ejemplo.com/curso-fotografia",
  },
  {
    nombre: "Marketing Digital para Principiantes",
    descripcion: "Aprende a promocionar productos y servicios online.",
    imagen: "/curso-marketing.jpg",
    link: "https://ejemplo.com/curso-marketing",
  },
  {
    nombre: "Emprendimiento Básico",
    descripcion: "Crea y administra tu propio negocio con bases sólidas.",
    imagen: "/curso-emprendimiento.jpg",
    link: "https://ejemplo.com/curso-emprendimiento",
  },
  {
    nombre: "Inglés Básico",
    descripcion: "Mejora tus habilidades para comunicarte en inglés.",
    imagen: "/curso-ingles.jpg",
    link: "https://ejemplo.com/curso-ingles",
  },
  {
    nombre: "Comunicación Efectiva",
    descripcion: "Aprende a expresarte con claridad y confianza.",
    imagen: "/curso-comunicacion.jpg",
    link: "https://ejemplo.com/curso-comunicacion",
  },
];

const CursosPage = () => {
  const [modal, setModal] = useState({ visible: false, curso: null });
  const [busqueda, setBusqueda] = useState("");

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="cursos-container">
      <h1 className="cursos-title">Explora Nuestros Cursos</h1>
      <p className="cursos-subtitle">Descubre lo que puedes aprender hoy</p>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar curso..."
        className="cursos-buscador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Grid de cursos */}
      <div className="cursos-grid">
        {cursosFiltrados.length > 0 ? (
          cursosFiltrados.map((curso, idx) => (
            <div
              key={idx}
              className="curso-card"
              onClick={() => setModal({ visible: true, curso })}
            >
              <img src={curso.imagen} alt={curso.nombre} className="curso-img" />
              <div className="curso-info">
                <h3>{curso.nombre}</h3>
                <p>{curso.descripcion}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">No se encontraron cursos con ese nombre.</p>
        )}
      </div>

      {/* Modal */}
      {modal.visible && (
        <div
          className="modal-overlay"
          onClick={() => setModal({ visible: false, curso: null })}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modal.curso.nombre}</h2>
            <p>{modal.curso.descripcion}</p>
            <a
              href={modal.curso.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              Ir al curso
            </a>
            <button
              className="modal-close"
              onClick={() => setModal({ visible: false, curso: null })}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CursosPage;
