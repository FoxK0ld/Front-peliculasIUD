import React, { useEffect, useState } from 'react'
import { crearGenero, obtenerGeneros, editarGeneroPorID } from '../../services/GeneroService'
import Modal from '../Modal'
import Table from './Table'
import Loading from './Loading'

export default function Generos() {

  const [generos, setGeneros] = useState([])
  const [cargando, setCargando] = useState(false)
  const [genero, setGenero] = useState({
    _id: null,
    nombre: '',
    descripcion: '',
    estado: true
  })
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    listarGeneros()
  }, [])

  const listarGeneros = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerGeneros()
      setGeneros(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (genero._id) {
        await editarGeneroPorID(genero, genero._id)
      } else {
        await crearGenero(genero)
      }
      listarGeneros()
      clearGenero()
      setModalOpen(false);
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setGenero({
      ...genero,
      [e.target.name]: e.target.value
    })
  }

  const handleToggleChange = () => {
    setGenero((prev) => ({
      ...prev,
      estado: !prev.estado,
    }))
  }

  const clearGenero = () => {
    console.log('limpiar')
    setGenero({
      _id: null,
      nombre: '',
      descripcion: '',
      estado: true
    })
  }
  const handleEdit = (generoToEdit) => {
    setGenero(generoToEdit)
    setModalOpen(true)
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title={genero._id ? 'Editar Genero' : 'Nuevo Genero'}
        onClose={() => {
          clearGenero();
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
            value={genero.nombre}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="message-text"
            name='descripcion'
            onChange={handleChange}
            value={genero.descripcion}
          ></textarea>
        </div>

        {genero._id && (
          <div className="mb-3 form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="estado"
              checked={genero.estado}
              onChange={handleToggleChange}
            />
            <label className="form-check-label" htmlFor="estado">
              {genero.estado ? 'Activo' : 'Inactivo'}
            </label>
          </div>
        )}
      </Modal>

      <h3>Generos</h3>
      <button type="button" className="btn btn-outline-primary" onClick={() => {
        clearGenero();
        setModalOpen(true);
      }}>Nuevo</button>

      {cargando && <Loading />}

      <Table
        generos={generos}
        handleEdit={handleEdit}
      />
    </>
  )
}
