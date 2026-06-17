// Layout for the authentication screens: the quote (hero) + the form area.
// Uses the children prop to receive each screen's specific content.
function AuthLayout({ children }) {
  return (
    <div className="container">
      <div className="hero">
        <p>
          "Educação não é o aprendizado de fatos, mas treinamento da mente para
          pensar."
          <span>Albert Einstein</span>
        </p>
      </div>

      <div className="form-area">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default AuthLayout
