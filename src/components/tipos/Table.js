import React from 'react'
import Fila from './Fila'

export default function Table({ tipos, handleEdit }) {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Creado</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tipos.map((tipo, index) =>
                        (
                            <Fila
                                key={tipo._id}
                                index={index}
                                tipo={tipo}
                                handleEdit={handleEdit}
                            />
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
