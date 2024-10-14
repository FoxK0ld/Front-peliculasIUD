import React from 'react'
import dayjs from 'dayjs'

export default function Fila({ media, index, handleEdit }) {
    return (
        <tr key={media._id}>
            <th scope="row">{index + 1}</th>
            <td>{media.serial}</td>
            <td>{media.titulo}</td>
            <td>{media.sinopsis}</td>
            <td>{media.url}</td>
            <td><img
                src={media.imagen}
                alt={media.titulo}
                style={{ maxWidth: '100px', maxHeight: '75px', objectFit: 'cover' }}
            />
            </td>
            <td>{media.genero.nombre}</td>
            <td>{media.director.nombre}</td>
            <td>{media.productora.nombre}</td>
            <td>{media.tipo.nombre}</td>
            <td>{dayjs(media.fechaEstreno).format('DD/MM/YYYY')}</td>
            <td>{dayjs(media.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => handleEdit(media)}>Editar</button></td>
        </tr>
    )
}
