import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <NavLink className="brand" to="/">
        <span className="brand-mark">R</span>
        <span>
          <strong>Route Garden</strong>
          <small>React Router demo</small>
        </span>
      </NavLink>

      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/" end>Tổng quan</NavLink>
        <NavLink to="/orchids">Route params</NavLink>
        <NavLink to="/dashboard">Nested routes</NavLink>
        <NavLink to="/hooks">Hooks</NavLink>
        <NavLink to="/custom-hook">Custom Hook</NavLink>
      </nav>
    </header>
  )
}

export default Header
