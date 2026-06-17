import { Routes, Route, Navigate } from 'react-router-dom'

// Authentication flow pages
import LoginPage from './pages/LoginPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import NewPasswordPage from './pages/NewPasswordPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import SignupDataPage from './pages/SignupDataPage.jsx'

// Internal pages (SPA)
import AppLayout from './components/AppLayout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SubjectsPage from './pages/SubjectsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import TutorAIPage from './pages/TutorAIPage.jsx'

function App() {
  return (
    <Routes>
      {/* Authentication flow */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/new-password" element={<NewPasswordPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup/data" element={<SignupDataPage />} />

      {/* Internal screens use the layout with the navigation menu */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tutor" element={<TutorAIPage />} />
      </Route>

      {/* Any unknown route goes back to the login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
