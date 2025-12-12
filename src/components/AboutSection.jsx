import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="somos">
      <div className="somos-content container">
        <h2>¿Quienes somos?</h2>
        
        <div className="somos-group">
          <div className="somos-1">
            <img className="img-prof" src="/src/assets/images/Profe.png.jpeg" alt="Profesor" />
            <h3>Bernardo Lorea Ayala</h3>
            <p>
              El profesor Bernardo Lorea Ayala, Licenciado en Educación Musical, 
              se desempeña como director y profesor en la 
              Academia "Da Capo". Con pasión y compromiso, guía a 
              sus estudiantes en el desarrollo de habilidades musicales, fomentando 
              la creatividad, el trabajo en equipo y la apreciación por la diversidad 
              sonora. Su enfoque pedagógico integra teoría, práctica instrumental 
              y proyectos colaborativos que enriquecen la formación integral de los 
              jóvenes.
            </p>
          </div>
          
          <div className="somos-1">
            <img src="/src/assets/images/Captura de Pantalla 2025-10-17 a la(s) 19.40.49.png" alt="Academia" />
            <h3>Academia</h3>
            <p>
              La Academia de Música Da Capo, dirigida por la 
              Lic. Bernardo Lorea Ayala, ofrece formación integral en expresión
              musical para niños, jóvenes y adultos. Con un enfoque pedagógico 
              centrado en el desarrollo artístico, técnico y emocional, la academia 
              imparte clases de instrumento, teoría musical y ensambles, 
              promoviendo el talento, la disciplina y la creatividad. Nuestro 
              compromiso es brindar un espacio inclusivo, dinámico y profesional 
              donde cada estudiante pueda explorar su voz y estilo musical.
            </p>
          </div>
        </div>
        <Link to="/informacion" className="btn-1">Información</Link>
      </div>
    </section>
  );
};

export default AboutSection;