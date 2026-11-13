import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container d-flex flex-wrap gap-3">
        <NavLink to="/" className="navbar-brand">
          PawCats
        </NavLink>

        <div className="d-flex flex-wrap gap-3">
          <NavLink to="/" end className="nav-link">
            Inicio
          </NavLink>

          <NavLink to="/adopciones" className="nav-link">
            Adopciones
          </NavLink>

          <NavLink to="/contacto" className="nav-link">
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar