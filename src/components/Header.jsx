import { NavLink } from 'react-router-dom'

// Navigation menu for the internal screens.
// Uses NavLink to visually highlight the active route ("menu__item--active").
const links = [
  { to: '/dashboard', label: 'Painel' },
  { to: '/subjects', label: 'Disciplinas' },
  { to: '/tutor', label: 'Tutor IA' },
  { to: '/profile', label: 'Perfil' },
]

function Header() {
  return (
    <header className="menu">
      <div className="menu__body">
        <h1 className="menu__title">
          Academia <span>Portal do Aluno</span>
        </h1>

        <nav className="menu__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'menu__item menu__item--active' : 'menu__item'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
