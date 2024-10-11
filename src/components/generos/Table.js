import React from 'react'
import Fila from './Fila'

export default function Table({ generos }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    generos.map((genero, index) => 
                        (
                           <Fila
                            key={genero._id}
                            index={index}
                            genero={genero}
                           />
                        )
                    )
                }
            </tbody>
        </table>
    )
}
