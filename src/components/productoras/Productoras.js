import React, { useEffect, useState } from 'react'
import { crearProductora, obtenerProductoras, editarProductoraPorID } from '../../services/ProductoraService'
import Modal from '../Modal'
import Table from './Table'
import Loading from './Loading'

export default function Productoras() {

  const [productoras, setProductoras] = useState([])
  const [cargando, setCargando] = useState(false)
  const [productora, setProductora] = useState({
    _id: null,
    nombre: '',
    descripcion: '',
    slogan: '',
    estado: true
  })
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    listarProductoras()
  }, [])

  const listarProductoras = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerProductoras()
      setProductoras(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (productora._id) {
        await editarProductoraPorID(productora, productora._id)
      } else {
        await crearProductora(productora)
      }
      listarProductoras()
      clearProductora()
      setModalOpen(false);
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setProductora({
      ...productora,
      [e.target.name]: e.target.value
    })
  }

  const handleToggleChange = () => {
    setProductora((prev) => ({
      ...prev,
      estado: !prev.estado,
    }))
  }

  const clearProductora = () => {
    console.log('limpiar')
    setProductora({
      _id: null,
      nombre: '',
      descripcion: '',
      slogan: '',
      estado: true
    })
  }
  const handleEdit = (productoraToEdit) => {
    setProductora(productoraToEdit)
    setModalOpen(true)
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title={productora._id ? 'Editar Productora' : 'Nuevo Productora'}
        onClose={() => {
          clearProductora();
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
            value={productora.nombre}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="message-text"
            name='descripcion'
            onChange={handleChange}
            value={productora.descripcion}

          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">Slogan:</label>
          <textarea
            className="form-control"
            id="message-text"
            name='slogan'
            onChange={handleChange}
            value={productora.slogan}

          ></textarea>
        </div>

        {productora._id && (
          <div className="mb-3 form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="estado"
              checked={productora.estado}
              onChange={handleToggleChange}
            />
            <label className="form-check-label" htmlFor="estado">
              {productora.estado ? 'Activo' : 'Inactivo'}
            </label>
          </div>
        )}
      </Modal>

      <h3>Productoras</h3>
      <button type="button" className="btn btn-outline-primary" onClick={() => {
        clearProductora();
        setModalOpen(true);
      }}>Nuevo</button>

      {cargando && <Loading />}

      <Table
        productoras={productoras}
        handleEdit={handleEdit}
      />
    </>
  )
}
