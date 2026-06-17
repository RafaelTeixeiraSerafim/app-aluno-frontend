import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Button from '../components/Button.jsx'

function NewPasswordPage() {
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function validate() {
    const newErrors = {}
    if (!password) {
      newErrors.password = 'A senha é obrigatória.'
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.'
    }
    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'As senhas não coincidem.'
    }
    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      navigate('/')
    }
  }

  return (
    <AuthLayout>
      <h1>Nova Senha</h1>
      <p>Informe abaixo sua nova senha.</p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <InputField
          id="repeatPassword"
          label="Repita a Senha"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          error={errors.repeatPassword}
        />

        <Button type="submit">Salvar</Button>
      </form>

      <p className="form-footer">
        <Link to="/">Voltar ao login.</Link>
      </p>
    </AuthLayout>
  )
}

export default NewPasswordPage
