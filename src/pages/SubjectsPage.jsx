import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

// Subjects collection (list rendering with .map() and the key prop).
const subjects = [
  {
    id: 1,
    name: 'Front-end',
    professor: 'Prof. Marco Silva',
    status: 'Em curso',
    progressLabel: 'Progresso',
    progress: 75,
  },
  {
    id: 2,
    name: 'UX Design',
    professor: 'Dra. Ana Lúcia',
    status: 'Próximo semestre',
    progressLabel: 'Disponibilidade',
    progress: 0,
  },
]

function SubjectsPage() {
  return (
    <>
      <section className="welcome">
        <h2>Minhas Disciplinas</h2>
      </section>

      <div className="subjects__grid">
        {subjects.map((subject) => (
          <Card key={subject.id} className="subject">
            <div className="card__body card__body--full">
              <div className="subject__header">
                <div>
                  <h3 className="card__title">{subject.name}</h3>
                  <p className="card__description">{subject.professor}</p>
                </div>
                <span className="card__badge">{subject.status}</span>
              </div>

              <div className="subject__progress">
                <span>{subject.progressLabel}</span>
                <span>{subject.progress}%</span>
              </div>
              <div className="card__progress">
                <div style={{ width: `${subject.progress}%` }}></div>
              </div>

              <Button>Acessar Disciplina</Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

export default SubjectsPage
