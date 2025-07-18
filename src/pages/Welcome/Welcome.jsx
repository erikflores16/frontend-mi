import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CombinedStyles.css";

const universities = [
  {
    name: "Universidad Autónoma de Yucatán (UADY)",
    description: "Principal universidad pública de Yucatán, con una amplia oferta académica.",
    image: "/uady.jpeg",
    link: "https://uady.mx/ofertaeducativa",
  },
  {
    name: "Instituto Tecnológico de Mérida",
    description: "Líder en formación de ingenieros y profesionales técnicos.",
    image: "/tec.jpg",
    link: "https://www.merida.tecnm.mx/",
  },
  {
    name: "Universidad Anáhuac Mayab",
    description: "Universidad privada con programas de excelencia internacional.",
    image: "/ana.jpeg",
    link: "https://merida.anahuac.mx/nosotros/modelo-educativo",
  },
  {
    name: "Universidad Modelo",
    description: "Ofrece programas educativos innovadores con enfoque social.",
    image: "/modelo.jpeg",
    link: "https://www.unimodelo.edu.mx/",
  },
  {
    name: "Universidad Marista de Mérida",
    description: "Institución privada con valores humanistas.",
    image: "/maristas.jpg",
    link: "https://www.marista.edu.mx/licenciaturas",
  },
  {
    name: "Universidad Vizcaya de las Américas",
    description: "Con enfoque práctico y oferta académica amplia.",
    image: "/vizcaya.jpeg",
    link: "https://uva.edu.mx/merida/licenciaturas/",
  },
  {
    name: "Universidad Interamericana para el Desarrollo (UNID)",
    description: "Centrada en la educación a distancia y presencial.",
    image: "/inter.jpg",
    link: "https://www.unid.talisis.com/licenciaturas",
  },
  {
    name: "Universidad TecMilenio",
    description: "Modelo educativo flexible e innovador.",
    image: "/tecmilenio.jpg",
    link: "https://tecmilenio.mx/es/campus/merida?srsltid=AfmBOop14o_LmEdwa5EhslEezCectCUVaXylHWFkmFPA2amvTK83g7As",
  },
  {
    name: "Universidad Latino",
    description: "Ofrece programas académicos enfocados en emprendimiento.",
    image: "/latino.jpg",
    link: "https://www.universidadlatino.edu.mx/",
  },
  {
    name: "Universidad Privada de la Península",
    description: "Promueve la educación integral y el liderazgo.",
    image: "/peninsula.png",
    link: "https://www.universidadupp.edu.mx/",
  },
  {
    name: "Centro de Estudios Superiores CTM",
    description: "Formación técnica y profesional con visión práctica.",
    image: "/ctm.jpg",
    link: "https://sites.google.com/cesctm.edu.mx/licenciaturas/",
  },
  {
    name: "Universidad de Oriente (UNO)",
    description: "Institución pública con enfoque regional.",
    image: "/oriente.jpeg",
    link: "http://www.uno.edu.mx/#",
  },
  {
    name: "Escuela Bancaria y Comercial (EBC)",
    description: "Líder en educación financiera y empresarial.",
    image: "/bancaria.jpeg",
    link: "https://www.ebc.mx/campus/merida/",
  },
  {
    name: "Universidad Autónoma de Campeche",
    description: "Ofrece programas académicos de calidad con presencia en Yucatán.",
    image: "/campeche.jpg",
    link: "https://uacam.mx/paginas/ver/358",
  },
  {
    name: "Universidad Pedagógica Nacional (UPN)",
    description: "Especializada en la formación de docentes y pedagogos.",
    image: "/upn.jpg",
    link: "https://pedagogia.upnvirtual.edu.mx/index.php/plan-de-estudios/malla-curricular",
  },
];

const CombinedPage = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="combined-container">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="/MI.png" alt="Logo MI" className="logo-image" />
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="inicio" smooth={true} duration={500} className="navbar-link">
                Inicio
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="nosotros" smooth={true} duration={500} className="navbar-link">
                Nosotros
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="universidades" smooth={true} duration={500} className="navbar-link">
                Universidades
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="universidad-ideal" smooth={true} duration={500} className="navbar-link">
                Descubre tu Universidad Ideal
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" onClick={handleLogout} className="navbar-link">
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      </nav>
<section id="inicio" className="welcome-content">
  <h1 className="welcome-title">Inicio</h1>
  <div className="underline"></div>

  {/* Galería original con contenedores hover */}
  <div className="gallery">
    <div className="gallery-top">
      {["/e4.jpeg", "/e6.jpeg"].map((src, idx) => (
        <div
          key={idx}
          className="gallery-item-container"
          onClick={() => navigate("/cursos")}
        >
          <img src={src} alt={`Imagen ${idx}`} className="gallery-item" />
          <div className="hover-overlay">
            ¿Te gustaría tomar un curso sobre algún interés?
          </div>
        </div>
      ))}
    </div>

    <div className="gallery-bottom">
      <div
        className="gallery-item-container"
        onClick={() => navigate("/cursos")}
      >
        <img src="/e5.jpeg" alt="Imagen inferior" className="gallery-item full-width-image" />
        <div className="hover-overlay">
          ¿Te gustaría tomar un curso sobre algún interés?
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="nosotros" className="nosotros-container">
        <h1 className="nosotros-title">Nosotros</h1>
        <div className="underline"></div>
        <div className="nosotros-box">
          <div className="image-container">
            <img src="/MI.png" alt="Logo MI" className="image" />
          </div>
          <div className="text-container">
            <p className="text">
              "MI", es una plataforma educativa personalizada que ayuda a los estudiantes a descubrir,
              explorar y elegir la carrera ideal para su futuro, teniendo en cuenta sus intereses, habilidades y presupuesto.
            </p>
          </div>
        </div>
      </section>

      <section id="universidades" className="universidades-content">
        <h1 className="universidades-title">Universidades</h1>
        <div className="underline"></div>
        <div className="carousel-container">
          <Slider {...settings}>
            {universities.map((uni, index) => (
              <div className="carousel-item" key={index}>
                <a href={uni.link} target="_blank" rel="noopener noreferrer">
                  <img src={uni.image} alt={uni.name} className="carousel-image" />
                </a>
                <h3>{uni.name}</h3>
                <p>{uni.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="universidad-ideal" className="discover-section">
        <div className="discover-container">
          <h1 className="discover-title">Descubre tu Universidad Ideal</h1>
          <div className="underline"></div>
          <p className="discover-text">
            ¿No sabes qué universidad se adapta mejor a tus intereses?
            <br />
            ¡Responde nuestro test y te lo diremos en minutos!
          </p>
          <button className="discover-button" onClick={() => navigate("/formulario")}>
            Comenzar Test
          </button>

          <div className="decorations">
            <div className="circle-decoration"></div>
            <div className="square-decoration"></div>
          </div>
        </div>

        <a
          href="https://wa.me/5215555555555?text=Hola,%20quiero%20más%20información%20sobre%20las%20universidades."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </a>
      </section>
    </div>
  );
};

export default CombinedPage;
