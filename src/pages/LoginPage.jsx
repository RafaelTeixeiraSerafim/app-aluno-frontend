import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Button from '../components/Button.jsx'
import { useUser } from '../context/UserContext.jsx'

function LoginPage() {
  // Controlled form: each input is bound to the state (value + onChange).
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const { login } = useUser()
  const navigate = useNavigate()

  function validate() {
    const newErrors = {}
    if (!email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Informe um e-mail válido.'
    }
    if (!password) {
      newErrors.password = 'A senha é obrigatória.'
    }
    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    // Only proceeds if there are no validation errors.
    if (Object.keys(newErrors).length === 0) {
      login({ email }) // stores the user in the global context
      navigate('/dashboard') // redirects after login (useNavigate)
    }
  }

  return (
    <AuthLayout>
      <h1>Bem-vindo de volta</h1>
      <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="email"
          label="Endereço de e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@email.com"
          error={errors.email}
        />

        <InputField
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          action={<Link to="/forgot-password">Esqueceu?</Link>}
        />

        <Button type="submit">Entrar</Button>
      </form>

      <p className="form-footer">
        Não tem uma conta? <Link to="/signup">Registre-se agora.</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
