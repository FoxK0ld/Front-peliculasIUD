import React from 'react'
import Fila from './Fila'

export default function Table({ medias, handleEdit }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Sipnosis</th>
                    <th scope="col">Url</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Fecha estreno</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Director</th>
                    <th scope="col">Productora</th>
                    <th scope="col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                {
                    medias.map((media, index) => 
                        (
                           <Fila
                            key={media._id}
                            index={index}
                            media={media}
                            handleEdit={handleEdit}
                           />
                        )
                    )
                }
            </tbody>
        </table>
    )
}
