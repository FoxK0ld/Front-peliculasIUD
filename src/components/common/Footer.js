import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-body-secondary">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/features" className="nav-link px-2 text-body-secondary">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/pricing" className="nav-link px-2 text-body-secondary">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faqs" className="nav-link px-2 text-body-secondary">FAQs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link px-2 text-body-secondary">About</NavLink>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        © {new Date().getFullYear()} Jonathan David Guerra Cano
      </p>
    </footer>
  );
}
