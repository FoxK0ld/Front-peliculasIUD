import React, { useEffect, useState } from 'react'
import { crearMedia, obtenerMedias, editarMediaPorID } from '../../services/MediaService'
import { obtenerGeneros } from '../../services/GeneroService'
import { obtenerDirectores } from '../../services/DirectorService'
import { obtenerProductoras } from '../../services/ProductoraService'
import { obtenerTipos } from '../../services/TipoService'
import Modal from '../Modal'
import Table from './Table'
import Loading from './Loading'

export default function Medias() {

  const [medias, setMedias] = useState([])
  const [cargando, setCargando] = useState(false)
  const [media, setMedia] = useState({
    _id: null,
    serial: '',
    titulo: '',
    sinopsis: '',
    url: '',
    imagen: '',
    fechaEstreno: '',
    genero: '',
    director: '',
    productora: '',
    tipo: ''
  })
  const [isModalOpen, setModalOpen] = useState(false)
  const [generos, setGeneros] = useState([])
  const [directores, setDirectores] = useState([])
  const [productoras, setProductoras] = useState([])
  const [tipos, setTipos] = useState([])

  useEffect(() => {
    listarMedias()
    listarGeneros()
    listarDirectores()
    listarProductoras()
    listarTipos()
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

  const listarGeneros = async () => {
    try {
      const { data } = await obtenerGeneros()
      setGeneros(data)
    } catch (e) {
      console.log(e)
    }
  }

  const listarDirectores = async () => {
    try {
      const { data } = await obtenerDirectores()
      setDirectores(data)
    } catch (e) {
      console.log(e)
    }
  }

  const listarProductoras = async () => {
    try {
      const { data } = await obtenerProductoras()
      setProductoras(data)
    } catch (e) {
      console.log(e)
    }
  }

  const listarTipos = async () => {
    try {
      const { data } = await obtenerTipos()
      setTipos(data)
    } catch (e) {
      console.log(e)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (media._id) {
        await editarMediaPorID(media, media._id)
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
    const { name, value } = e.target;
    setMedia({
      ...media,
      [name]: value
    });
  };


  const clearMedia = () => {
    console.log('limpiar')
    setMedia({
      _id: null,
      serial: '',
      titulo: '',
      sinopsis: '',
      url: '',
      imagen: '',
      fechaEstreno: '',
      genero: '',
      director: '',
      productora: '',
      tipo: ''
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
          <label htmlFor="recipient-name" className="col-form-label">Sinopsis:</label>
          <input
            type="text"
            className="form-control"
            id="recipient-name"
            name='sinopsis'
            onChange={handleChange}
            value={media.sinopsis}
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
          <label htmlFor="genero" className="col-form-label">Género:</label>
          <select
            className="form-control"
            id="genero"
            name="genero"
            onChange={handleChange}
            value={media.genero || ''}
          >
            <option value="">Seleccione un género</option>
            {generos.map((genero) => (
              <option key={genero._id} value={genero._id}>
                {genero.nombre}
              </option>
            ))}
          </select>
        </div>


        <div className="mb-3">
          <label htmlFor="director" className="col-form-label">Director:</label>
          <select
            className="form-control"
            id="director"
            name="director"
            onChange={handleChange}
            value={media.director || ''}
          >
            <option value="">Seleccione un director</option>
            {directores.map((director) => (
              <option key={director._id} value={director._id}>
                {director.nombre}
              </option>
            ))}
          </select>
        </div>



        <div className="mb-3">
          <label htmlFor="productora" className="col-form-label">Productora:</label>
          <select
            className="form-control"
            id="productora"
            name="productora"
            onChange={handleChange}
            value={media.productora || ''}
          >
            <option value="">Seleccione una productora</option>
            {productoras.map((productora) => (
              <option key={productora._id} value={productora._id}>
                {productora.nombre}
              </option>
            ))}
          </select>
        </div>



        <div className="mb-3">
          <label htmlFor="tipo" className="col-form-label">Tipo:</label>
          <select
            className="form-control"
            id="tipo"
            name="tipo"
            onChange={handleChange}
            value={media.tipo || ''}
          >
            <option value="">Seleccione un tipo</option>
            {tipos.map((tipo) => (
              <option key={tipo._id} value={tipo._id}>
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>




      </Modal>

      <h3>Medias</h3>
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
