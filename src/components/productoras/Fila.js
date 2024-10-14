import React from 'react'
import dayjs from 'dayjs'

export default function Fila({ productora, index, handleEdit }) {
    return (
        <tr key={productora._id}>
            <th scope="row">{index + 1}</th>
            <td>{productora.nombre}</td>
            <td>{productora.descripcion}</td>
            <td>{productora.slogan}</td>
            <td>{productora.estado ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(productora.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => handleEdit(productora)}>Editar</button></td>
        </tr>
    )
}
