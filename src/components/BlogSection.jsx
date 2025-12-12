import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      imagen: "/src/assets/images/WhatsApp Image 2025-10-29 at 10.35.56 PM.jpeg",
      titulo: "Presentación de libro",
      descripcion: "Presentación de un libro llamado Locura y Horror de un autor Argentino muy poco famoso"
    },
    {
      imagen: "/src/assets/images/im2.jpeg",
      titulo: "Concierto 2025",
      descripcion: "Concierto 2025, presentaciones de algunos solistas y presentaciones de los 3 ensambles, rock ensamble, latin ensamble y straen ensamble"
    },
    {
      imagen: "/src/assets/images/rock.jpeg",
      titulo: "Rock Ensambles",
      descripcion: "Presentación de rock ensamble en los XV años de la guitarristas Zyanya en el año 2024"
    }
  ];

  return (
    <section className="blog container">
      <h2>Blog</h2>
      <p>
        Aquí veremos algunas fotos de la academia, ya sea presentaciones, conciertos
        o presentación de algún ensambles
      </p>

      <div className="blog-content">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-1">
            <img src={post.imagen} alt={post.titulo} />
            <h3>{post.titulo}</h3>
            <p>{post.descripcion}</p>
          </div>
        ))}
      </div>

      <Link to="/informacion#blog" className="btn-1">Información</Link>
    </section>
  );
};

export default BlogSection;