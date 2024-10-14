import React from 'react'
import dayjs from 'dayjs'

export default function Fila({ genero, index, handleEdit }) {
    return (
        <tr key={genero._id}>
            <th scope="row">{index + 1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.descripcion}</td>
            <td>{genero.estado ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(genero.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => handleEdit(genero)}>Editar</button></td>
        </tr>
    )
}
