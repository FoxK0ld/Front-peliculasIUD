import React from 'react'
import dayjs from 'dayjs'

export default function Fila({ tipo, index, handleEdit }) {
    return (
        <tr key={tipo._id}>
            <th scope="row">{index + 1}</th>
            <td>{tipo.nombre}</td>
            <td>{tipo.descripcion}</td>
            <td>{dayjs(tipo.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => handleEdit(tipo)}>Editar</button></td>
        </tr>
    )
}
