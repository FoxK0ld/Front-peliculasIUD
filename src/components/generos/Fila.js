import React from 'react'

export default function Fila({genero, index}) {
    return (
        <tr key={genero._id}>
            <th scope="row">{index + 1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.descripcion}</td>
            <td>{genero.estado ? 'Activo' : 'Inactivo'}</td>
            <td>{genero.fechaCreacion}</td>
            <td><button type="button" class="btn btn-outline-success">Editar</button></td>
        </tr>
    )
}
