import React from 'react'

export default function Modal({director, handleChange, guardar, clearDirector}) {
  return (
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Director</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name='nombre'
                    onChange={handleChange}
                    value={director.nombre}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearDirector}>Cerrar</button>
              <button onClick={guardar} type="button" className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>

  )
}
