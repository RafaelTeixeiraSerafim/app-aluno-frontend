import { useState } from 'react'
import Button from '../components/Button.jsx'
import { askTutor } from '../services/tutorService.js'
import { useUser } from '../context/UserContext.jsx'

function TutorAIPage() {
  const { user } = useUser()

  const [question, setQuestion] = useState('')
  const [conversation, setConversation] = useState([])

  // The three request states: loading / error / data.
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function send(event) {
    event.preventDefault()
    const text = question.trim()
    if (!text) return

    // Adds the user's question to the conversation.
    setConversation((current) => [...current, { author: 'user', text }])
    setQuestion('')
    setError('')
    setLoading(true)

    // try / catch / finally pattern for API consumption.
    try {
      const answer = await askTutor(text)
      setConversation((current) => [...current, { author: 'tutor', text: answer }])
    } catch (e) {
      setError('Não foi possível obter a resposta do Tutor IA. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const firstName = user.name.split(' ')[0]

  return (
    <div className="tutor">
      <div className="tutor__conversation">
        {conversation.length === 0 && !loading && (
          <p className="tutor__empty">
            Faça uma pergunta para começar a conversar com o Tutor IA.
          </p>
        )}

        {conversation.map((message, index) => (
          <div className="tutor__message" key={index}>
            <strong>{message.author === 'user' ? firstName : 'Tutor IA'}</strong>
            <p>{message.text}</p>
          </div>
        ))}

        {/* State: loading */}
        {loading && (
          <div className="tutor__message">
            <strong>Tutor IA</strong>
            <p className="tutor__loading">Pensando...</p>
          </div>
        )}

        {/* State: error (conditional rendering with &&) */}
        {error && <p className="tutor__error">{error}</p>}
      </div>

      <form className="tutor__form" onSubmit={send}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Pergunte alguma coisa"
        />
        <Button type="submit" disabled={loading}>
          {loading ? '...' : 'Enviar'}
        </Button>
      </form>
      <p className="tutor__disclaimer">
        O Tutor pode cometer erros. Considere verificar informações importantes.
      </p>
    </div>
  )
}

export default TutorAIPage
