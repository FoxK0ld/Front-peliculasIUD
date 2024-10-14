import React, { useEffect, useState } from 'react';
import { obtenerMedias } from '../../services/MediaService';

export default function Media() {
  const [medias, setMedias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchMedias = async () => {
      try {
        const { data } = await obtenerMedias();
        setMedias(data);
      } catch (error) {
        console.error('Error al obtener medias:', error);
      } finally {
        setCargando(false);
      }
    };

    fetchMedias();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {medias.map((media) => (
          <div className="col" key={media._id}>
            <div className="card">
              <img src={media.imagen} className="card-img-top" alt={media.titulo} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{media.titulo}</h5>
                <p className="card-text">{media.sinopsis}</p>
                <p className="card-text"><strong>Género:</strong> {media.genero.nombre}</p>
                <p className="card-text"><strong>Director:</strong> {media.director.nombre}</p>
                <p className="card-text"><strong>Productora:</strong> {media.productora.nombre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
