import React, { useEffect, useState } from 'react'
import { crearMedia, obtenerMedias, editarMediaPorID } from '../../services/MediaService'
import Modal from '../Modal'
import Table from './Table'
import Loading from './Loading'

export default function Medias() {

  const [medias, setMedias] = useState([])
  const [cargando, setCargando] = useState(false)
  const [media, setMedia] = useState({
    _id: null,
    serial : '',
    titulo : '',
    sipnosis : '',
    url : '',
    imagen : '',
    fechaEstreno : '',
    genero : '',
    director : '',
    productora : '',
    tipo : ''
  })
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    listarMedias()
  }, [])

  const listarMedias = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerMedias()
      setMedias(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try { 
      if (media._id){
      await editarMediaPorID (media, media._id)
    } else {
      await crearMedia(media)
    }
      listarMedias()
      clearMedia()
      setModalOpen(false);
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setMedia({
      ...media,
      [e.target.name] : e.target.value
    })
  }

  const clearMedia = () => {
    console.log('limpiar')
    setMedia({
    _id: null,
    serial : '',
    titulo : '',
    sipnosis : '',
    url : '',
    imagen : '',
    fechaEstreno : '',
    genero : '',
    director : '',
    productora : '',
    tipo : ''
     })
  }
  const handleEdit = (mediaToEdit) => {
    setMedia(mediaToEdit)
    setModalOpen(true)
  }

  return (
    <>
      <Modal 
        isOpen={isModalOpen} 
        title={media._id ? 'Editar Media' : 'Nueva Media'} 
        onClose={() => {
          clearMedia();
          setModalOpen(false);
        }} 
        onSave={guardar}
      >
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Serial:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='serial'
            onChange={handleChange}
            value={media.serial}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Titulo:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='titulo'
            onChange={handleChange}
            value={media.titulo}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Sipnosis:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='sipnosis'
            onChange={handleChange}
            value={media.sipnosis}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Url:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='url'
            onChange={handleChange}
            value={media.url}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Imagen:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='imagen'
            onChange={handleChange}
            value={media.imagen}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Fecha Estreno:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='fechaEstreno'
            onChange={handleChange}
            value={media.fechaEstreno}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Genero:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='genero'
            onChange={handleChange}
            value={media.genero}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Director:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='director'
            onChange={handleChange}
            value={media.director}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Productora:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='productora'
            onChange={handleChange}
            value={media.productora}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Tipo:</label>
          <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='tipo'
            onChange={handleChange}
            value={media.tipo}
            />
            </div>
        
    
      </Modal>

      <h3>Generos</h3>
      <button type="button" className="btn btn-outline-primary" onClick={() => {
        clearMedia();
        setModalOpen(true); 
      }}>Nuevo</button>

      {cargando && <Loading />}

      <Table 
        medias={medias}
        handleEdit={handleEdit}
      />
    </>
  )
  }
