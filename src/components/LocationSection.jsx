import React from 'react';
import { Link } from 'react-router-dom';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <>
      <section className="general">
        <div className="general-1">
          <h2>Ubicación</h2>
          <p>
            Ignacio Zaragoza esquina con, Av 5 de Mayo, Centro, 
            54880 Melchor Ocampo, Méx.
          </p>
          <Link to="/informacion#hor" className="btn-1">Información</Link>
        </div>
        <div className="general-2"></div>
      </section>

      <section className="general">
        <div className="general-3"></div>
        <div className="general-1">
          <h2>Contactos</h2>
          <p>Teléfono: 55 6802 7951</p>
          <p>Correo:</p>
          <p>Teléfonos Alternos:</p>
          <Link to="/informacion#con" className="btn-1">Información</Link>
        </div>
      </section>
    </>
  );
};

export default LocationSection;