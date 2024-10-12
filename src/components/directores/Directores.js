import React, { useEffect, useState } from 'react'
import { crearDirector, obtenerDirectores, editarDirectorPorID} from '../../services/DirectorService'
import Modal from '../Modal'
import Table from './Table'
import Loading from './Loading'

export default function Directores() {

  const [directores, setDirectores] = useState([])
  const [cargando, setCargando] = useState(false)
  const [director, setDirector] = useState({
    _id: null,
    nombre: '',
    estado: true
  })
  const [isModalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    listarDirectores()
  }, [])

  const listarDirectores = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerDirectores()
      setDirectores(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (director._id) {
        await editarDirectorPorID(director, director._id)
      } else {
      await crearDirector(director)
      }
      listarDirectores()
      clearDirector()
      setModalOpen(false);
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setDirector({
      ...director,
      [e.target.name] : e.target.value
    })
  }

  const handleToggleChange = () => {
    setDirector((prev) => ({
      ...prev,
      estado: !prev.estado,
    }))
  }

  const clearDirector = () => {
    console.log('limpiar')
    setDirector({
      _id: null,
      nombre: '',
      estado: true
    })
  }

  const handleEdit = (directorToEdit) => {
    setDirector(directorToEdit)
    setModalOpen(true)
    

  }
  return (
    <>
      <Modal 
        isOpen={isModalOpen} 
        title={director._id ? 'Editar Director' : 'Nuevo Director'} 
        onClose={() => {
          clearDirector();
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
            value={director.nombre}
          />
        </div>
        {director._id && (
          <div className="mb-3 form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="estado"
            checked={director.estado}
            onChange={handleToggleChange}
          />
          <label className="form-check-label" htmlFor="estado">
            {director.estado ? 'Activo' : 'Inactivo'}
          </label>
        </div>
    )}
      </Modal>

      <h3>Directores</h3>
      <button type="button" className="btn btn-outline-primary" onClick={() => {
        clearDirector();
        setModalOpen(true); 
      }}>Nuevo</button>

      {cargando && <Loading />}

      <Table 
        directores={directores}
        handleEdit={handleEdit}
      />
    </>
  )
}