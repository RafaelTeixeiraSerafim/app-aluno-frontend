import { NavLink } from 'react-router-dom'
import {
  DashboardIcon,
  BookIcon,
  RobotIcon,
  UserIcon,
  GraduationIcon,
} from './Icons.jsx'

// Navigation menu for the internal screens.
// Uses NavLink to visually highlight the active route ("menu__item--active").
const links = [
  { to: '/dashboard', label: 'Painel', Icon: DashboardIcon },
  { to: '/subjects', label: 'Disciplinas', Icon: BookIcon },
  { to: '/tutor', label: 'Tutor IA', Icon: RobotIcon },
  { to: '/profile', label: 'Perfil', Icon: UserIcon },
]

function Header() {
  return (
    <header className="menu">
      <div className="menu__body">
        <h1 className="menu__title">
          <span className="menu__logo" aria-hidden="true">
            <GraduationIcon width={20} height={20} />
          </span>
          <span>
            Academia <span className="menu__subtitle">Portal do Aluno</span>
          </span>
        </h1>

        <nav className="menu__links">
          {links.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'menu__item menu__item--active' : 'menu__item'
              }
            >
              <Icon className="menu__icon" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
