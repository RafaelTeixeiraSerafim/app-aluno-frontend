// Reusable form field component.
// Takes props to configure itself (label, type, value, onChange...) and
// shows an error message via conditional rendering (&&).
function InputField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  action, // optional element on the right of the label (e.g. "Esqueceu?" link)
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {action}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  )
}

export default InputField
