import React, { useEffect, useState } from 'react'
import { crearGenero, obtenerGeneros } from '../../services/GeneroService'
import Modal from './Modal'
import Table from './Table'
import Loading from './Loading'

export default function Generos() {

  const [generos, setGeneros] = useState([])
  const [cargando, setCargando] = useState(false)
  const [genero, setGenero] = useState({
    nombre: '',
    descripcion: ''
  })

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
      await crearGenero(genero)
      listarGeneros()
      clearGenero()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
   // console.log(e.target)
    setGenero({
      ...genero,
      [e.target.name] : e.target.value
    })
  }

  const clearGenero = () => {
    console.log('limpiar')
    setGenero({
      nombre: '',
      descripcion: ''
    })
  }

  return (
    <>
      <Modal 
        genero={genero}
        handleChange={handleChange}
        guardar={guardar}
        clearGenero={clearGenero}
      />
      <h3>Generos</h3>
      <button onClick={clearGenero} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Loading />
        ) : ''
      }

      <Table 
        generos={generos}
      />
    </>
  )
}
