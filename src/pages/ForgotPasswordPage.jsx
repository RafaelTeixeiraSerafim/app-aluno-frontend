import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Button from '../components/Button.jsx'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim()) {
      setError('O e-mail é obrigatório.')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Informe um e-mail válido.')
      return
    }

    setError('')
    setSent(true)
    // Simulates the flow: after sending the link, goes to the new password screen.
    setTimeout(() => navigate('/new-password'), 1200)
  }

  return (
    <AuthLayout>
      <h1>Esqueci minha senha</h1>
      <p>Informe seu e-mail para enviarmos o link para redefinir sua senha.</p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="email"
          label="Endereço de e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@email.com"
          error={error}
        />

        {sent && (
          <p className="success-message">
            Link enviado! Redirecionando para a redefinição...
          </p>
        )}

        <Button type="submit">Enviar</Button>
      </form>

      <p className="form-footer">
        Lembrou a senha? <Link to="/">Voltar ao login.</Link>
      </p>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
