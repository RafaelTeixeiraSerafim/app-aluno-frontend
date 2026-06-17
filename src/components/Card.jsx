// Reusable "container" component.
// Demonstrates the children prop to wrap any content.
function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>
}

export default Card
