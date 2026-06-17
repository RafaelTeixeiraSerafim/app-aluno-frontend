import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Button from '../components/Button.jsx'

// Signup — step 1 of 2: enter the CPF.
function SignupPage() {
  const [cpf, setCpf] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    // Simple validation: required field + 11 numeric digits.
    const digitsOnly = cpf.replace(/\D/g, '')
    if (!cpf.trim()) {
      setError('O CPF é obrigatório.')
      return
    }
    if (digitsOnly.length !== 11) {
      setError('Informe um CPF válido (11 dígitos).')
      return
    }

    setError('')
    navigate('/signup/data')
  }

  return (
    <AuthLayout>
      <h1>Cadastre-se</h1>
      <p>
        Passo 1 de 2. <br />
        Por favor insira seu CPF para prosseguir.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="cpf"
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="000.000.000-00"
          error={error}
        />

        <Button type="submit">Prosseguir</Button>
      </form>

      <p className="form-footer">
        Já tem uma conta? <Link to="/">Entrar.</Link>
      </p>
    </AuthLayout>
  )
}

export default SignupPage
