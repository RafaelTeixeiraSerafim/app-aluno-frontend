import { useUser } from '../context/UserContext.jsx'

function ProfilePage() {
  // User data coming from the Context API (no prop drilling).
  const { user } = useUser()

  // Initials for the "avatar".
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const rows = [
    { label: 'Nome Completo', value: user.name },
    { label: 'Nome de Preferência', value: user.preferredName || '—' },
    { label: 'Endereço de E-mail', value: user.email },
    { label: 'Matrícula / CPF', value: user.cpf },
    { label: 'Número de Telefone', value: user.phone, empty: !user.phone },
  ]

  return (
    <>
      <section className="profile__header">
        <div className="profile__avatar">{initials}</div>
        <div>
          <h2>{user.name}</h2>
          <p>
            {user.course} • {user.year}
          </p>
        </div>
      </section>

      <nav className="profile__tabs">
        <span className="profile__tab profile__tab--active">Dados Pessoais</span>
        <span className="profile__tab">Configurações</span>
        <span className="profile__tab">Segurança</span>
      </nav>

      <div className="profile__table">
        {rows.map((row) => (
          <div className="profile__row" key={row.label}>
            <span className="profile__label">{row.label}</span>
            <span className={row.empty ? 'profile__value profile__value--empty' : 'profile__value'}>
              {row.empty ? 'Não fornecido' : row.value}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProfilePage
