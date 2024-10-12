import React from 'react'

export default function Fila({media, index, handleEdit}) {
    return (
        <tr key={media._id}>
            <th scope="row">{index + 1}</th>
            <td>{media.serial}</td>
            <td>{media.titulo}</td>
            <td>{media.sipnosis}</td>
            <td>{media.url}</td>
            <td>{media.imagen}</td>
            <td>{media.fechaEstreno}</td>
            <td>{media.media}</td>
            <td>{media.director}</td>
            <td>{media.productora}</td>
            <td>{media.tipo}</td>
            <td>{media.fechaCreacion}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => handleEdit(media)}>Editar</button></td>
        </tr>
    )
}
