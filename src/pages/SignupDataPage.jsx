import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Button from '../components/Button.jsx'
import { useUser } from '../context/UserContext.jsx'

// Signup — step 2 of 2: personal data (controlled form + validation).
function SignupDataPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const { login } = useUser()
  const navigate = useNavigate()

  function updateField(field) {
    return (e) => setForm({ ...form, [field]: e.target.value })
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'O nome é obrigatório.'
    if (!form.phone.trim()) newErrors.phone = 'O telefone é obrigatório.'
    if (!form.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Informe um e-mail válido.'
    }
    if (!form.password) {
      newErrors.password = 'A senha é obrigatória.'
    } else if (form.password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.'
    }
    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Signup completed: logs in with the provided data.
      login({
        name: form.name,
        email: form.email,
        phone: form.phone,
      })
      navigate('/dashboard')
    }
  }

  return (
    <AuthLayout>
      <h1>Cadastre-se</h1>
      <p>
        Passo 2 de 2. <br />
        Por favor insira seus dados para finalizar e prosseguir.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="name"
          label="Nome"
          value={form.name}
          onChange={updateField('name')}
          placeholder="Nome completo"
          error={errors.name}
        />
        <InputField
          id="phone"
          label="Telefone"
          type="tel"
          value={form.phone}
          onChange={updateField('phone')}
          placeholder="(99) 99999-9999"
          error={errors.phone}
        />
        <InputField
          id="email"
          label="E-mail"
          type="email"
          value={form.email}
          onChange={updateField('email')}
          placeholder="seu@email.com"
          error={errors.email}
        />
        <InputField
          id="password"
          label="Senha"
          type="password"
          value={form.password}
          onChange={updateField('password')}
          error={errors.password}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <p className="form-footer">
        <Link to="/signup">Voltar ao passo 1.</Link>
      </p>
    </AuthLayout>
  )
}

export default SignupDataPage
