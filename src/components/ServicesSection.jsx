import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const clases = [
    {
      imagen: "/src/assets/images/Guitarra.png.jpeg",
      nombre: "Guitarra"
    },
    {
      imagen: "/src/assets/images/pia.jpeg",
      nombre: "Piano"
    },
    {
      imagen: "/src/assets/images/bateria.png.jpeg",
      nombre: "Batería"
    },
    {
      imagen: "/src/assets/images/ba.jpeg",
      nombre: "Bajo Eléctrico"
    },
    {
      imagen: "/src/assets/images/pe.jpeg",
      nombre: "Percusiones Latinas"
    }
  ];

  const cursos = [
    {
      imagen: "/src/assets/images/teo.jpeg",
      nombre: "Teoría Musical"
    }
  ];

  return (
    <main className="services">
      <div className="services-content container">
        <h2>Clases</h2>
        
        <div className="services-group">
          {clases.map((clase, index) => (
            <div key={index} className="services-1">
              <img src={clase.imagen} alt={clase.nombre} />
              <h3>{clase.nombre}</h3>
            </div>
          ))}
        </div>

        <h2>Cursos</h2>
        
        <div className="services-group">
          {cursos.map((curso, index) => (
            <div key={index} className="services-1">
              <img src={curso.imagen} alt={curso.nombre} />
              <h3>{curso.nombre}</h3>
            </div>
          ))}
        </div>

        <Link to="/informacion" className="btn-1">Información</Link>
      </div>
    </main>
  );
};

export default ServicesSection;