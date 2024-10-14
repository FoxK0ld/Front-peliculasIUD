import React from 'react'
import dayjs from 'dayjs';

export default function Fila({ director, index, handleEdit }) {
    console.log(director);
    return (
        <tr key={director._id}>
            <th scope="row">{index + 1}</th>
            <td>{director.nombre}</td>
            <td>{director.estado ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(director.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => handleEdit(director)}>Editar</button></td>
        </tr>
    )
}
