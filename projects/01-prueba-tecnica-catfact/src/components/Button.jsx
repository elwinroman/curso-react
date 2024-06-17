import './Button.css'

export function Button ({ children, type }) {
  return (
    <button type={type} className='button'>
      {children }
    </button>
  )
}
