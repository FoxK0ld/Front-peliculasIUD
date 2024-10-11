import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({ title = ''}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/favicon.ico"
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top" />
        { title }
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            to='/'
            className='nav-link'
          >
            Home
          </NavLink>
          <NavLink
            to='/generos'
            className='nav-link'
          >
            Géneros
          </NavLink>
          <NavLink
            to='/directores'
            className='nav-link'
          >
            Directores
          </NavLink>
          
          <a className="nav-link" href="#">
            Productoras
          </a>
          <a className="nav-link" href="#">
            Tipos
          </a>
          <a className="nav-link" href="#">
            Media
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}
