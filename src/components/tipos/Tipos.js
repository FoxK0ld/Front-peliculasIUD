import React, { useEffect, useState } from 'react'
import { crearTipo, obtenerTipos, editarTipoPorID } from '../../services/TipoService'
import Modal from '../Modal'
import Table from './Table'
import Loading from './Loading'

export default function Tipos() {

  const [tipos, setTipos] = useState([])
  const [cargando, setCargando] = useState(false)
  const [tipo, setTipo] = useState({
    _id: null,
    nombre: '',
    descripcion: ''
  })
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    listarTipos()
  }, [])

  const listarTipos = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerTipos()
      setTipos(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (tipo._id) {
        await editarTipoPorID(tipo, tipo._id)
      } else {
        await crearTipo(tipo)
      }
      listarTipos()
      clearTipo()
      setModalOpen(false);
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setTipo({
      ...tipo,
      [e.target.name]: e.target.value
    })
  }


  const clearTipo = () => {
    console.log('limpiar')
    setTipo({
      _id: null,
      nombre: '',
      descripcion: ''
    })
  }
  const handleEdit = (tipoToEdit) => {
    setTipo(tipoToEdit)
    setModalOpen(true)
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title={tipo._id ? 'Editar Tipo' : 'Nuevo Tipo'}
        onClose={() => {
          clearTipo();
          setModalOpen(false);
        }}
        onSave={guardar}
      >
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="recipient-name"
            name='nombre'
            onChange={handleChange}
            value={tipo.nombre}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="message-text"
            name='descripcion'
            onChange={handleChange}
            value={tipo.descripcion}
          ></textarea>
        </div>


      </Modal>

      <h3>Tipos</h3>
      <button type="button" className="btn btn-outline-primary" onClick={() => {
        clearTipo();
        setModalOpen(true);
      }}>Nuevo</button>

      {cargando && <Loading />}

      <Table
        tipos={tipos}
        handleEdit={handleEdit}
      />
    </>
  )
}
