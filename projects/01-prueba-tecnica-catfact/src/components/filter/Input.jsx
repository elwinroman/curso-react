import './Input.css'
import { useState } from 'react'

export function Input ({ id, type, placeholder, regex, text, inputClass, labelClass, validationErrorMessage }) {
  const [invalid, setInvalid] = useState(false)

  const handleChange = (event) => {
    const { value } = event.target

    if (!value.trim().match(regex)) {
      setInvalid(true)
      event.target.setCustomValidity('Datos invalidos')
    } else {
      setInvalid(false)
      event.target.setCustomValidity('')
    }

    event.target.reportValidity()
  }

  return (
    <div className="input-box-container">
      <label htmlFor={id} className={labelClass}>{text}</label>
      <input
        id={id}
        type={type}
        className={inputClass}
        placeholder={placeholder}
        onChange={handleChange}
      />
      { invalid && <p className="error-message">{validationErrorMessage}</p> }
    </div>
  )
}

export function InputColor ({ label, disabled }) {
  const [color, setColor] = useState('#ff0000')

  const handleChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="input-box-container">
      <label className={`input-label-base ${disabled ? 'disabled' : ''}`}>{ label }</label>
      <div className={`input-base type-color ${disabled ? 'disabled' : ''}`} >
        <input
          onChange={handleChange}
          type="color"
          value={color}
          disabled={disabled}
        />
        <span>{color}</span>
      </div>
    </div>
  )
}

export function InputCheckboxWithLabel ({ label }) {
  return (
    <div className="type-checkbox">
      <input type="checkbox" className="input-type-checkbox" />
      <label className="label-type-checkbox" htmlFor="cbox2">{label}</label>
    </div>
  )
}
