import React from 'react'

export default function Fila({director, index}) {
    return (
        <tr key={director._id}>
            <th scope="row">{index + 1}</th>
            <td>{director.nombre}</td>
            <td>{director.estado ? 'Activo' : 'Inactivo'}</td>
            <td>{director.fechaCreacion}</td>
            <td><button type="button" className="btn btn-outline-success">Editar</button></td>
        </tr>
    )
}
