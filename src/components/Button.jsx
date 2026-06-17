// Reusable button component.
// Uses the children prop for its content and forwards the remaining props
// (type, onClick, disabled...) to the underlying <button> element.
function Button({ children, type = 'button', variant = 'primary', ...rest }) {
  return (
    <button type={type} className={`button button--${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
