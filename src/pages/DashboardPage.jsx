import { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import { useUser } from '../context/UserContext.jsx'

// Greeting based on the time of day (equivalent to getMsg() in the original app).
function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bom dia'
  if (hour < 18) return 'Boa tarde'
  return 'Boa noite'
}

// Featured subjects on the dashboard (collection -> list rendering).
const highlights = [
  {
    id: 1,
    title: 'Front-end',
    description: 'Aula 2: Conceitos do desenvolvimento Front-end e GIT + Github.',
    progress: 65,
  },
  {
    id: 2,
    title: 'UX Design',
    description: 'Aula 3: Usabilidade.',
    progress: 25,
  },
]

// Summary indicators.
const indicators = [
  { id: 'time', title: 'Tempo de Estudo', value: '12h 45m', caption: 'Esta semana' },
  { id: 'tasks', title: 'Tarefas Pendentes', value: '2', caption: 'Próximo vencimento em 2 dias' },
  { id: 'chats', title: 'Discussões com IA', value: '8', caption: 'Tópicos ativos' },
]

function DashboardPage() {
  const { user } = useUser()
  const [greeting, setGreeting] = useState('')

  // useEffect: computes the greeting once when the screen mounts.
  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  // Show only the first name in the greeting.
  const firstName = user.name.split(' ')[0]

  return (
    <>
      <section className="welcome">
        <h2>
          {greeting}, {firstName}.
        </h2>
        <p>
          Bem-vindo de volta à sua sessão de estudo focado. Você tem 2 tarefas
          para esta semana e está atualmente adiantado em seu cronograma de
          leitura.
        </p>
      </section>

      {highlights.map((item) => (
        <Card key={item.id}>
          <div className="card__body">
            <span className="card__badge">Em progresso</span>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__description">{item.description}</p>
            <div className="progress-row">
              <div className="card__progress">
                <div style={{ width: `${item.progress}%` }}></div>
              </div>
              <span className="progress-value">{item.progress}%</span>
            </div>
          </div>
          <Button>Retomar Estudo →</Button>
        </Card>
      ))}

      <div className="card__group">
        {indicators.map((indicator) => (
          <Card key={indicator.id}>
            <div className="card__body">
              <span className="card__badge">{indicator.title}</span>
              <h3 className="card__title">{indicator.value}</h3>
              <p className="card__description">{indicator.caption}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

export default DashboardPage
