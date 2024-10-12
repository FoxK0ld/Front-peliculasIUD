import React, { useEffect, useState } from 'react'
import { crearDirector, obtenerDirectores} from '../../services/DirectorService'
import Modal from './Modal'
import Table from './Table'
import Loading from './Loading'

export default function Directores() {

  const [directores, setDirectores] = useState([])
  const [cargando, setCargando] = useState(false)
  const [director, setDirector] = useState({
    nombre: ''
  })

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
      await crearDirector(director)
      listarDirectores()
      clearDirector()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
   // console.log(e.target)
    setDirector({
      ...director,
      [e.target.name] : e.target.value
    })
  }

  const clearDirector = () => {
    console.log('limpiar')
    setDirector({
      nombre: ''
    })
  }

  return (
    <>
      <Modal 
        director={director}
        handleChange={handleChange}
        guardar={guardar}
        clearDirector={clearDirector}
      />
      <h3>Generos</h3>
      <button onClick={clearDirector} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Loading />
        ) : ''
      }

      <Table 
        directores={directores}
      />
    </>
  )
}