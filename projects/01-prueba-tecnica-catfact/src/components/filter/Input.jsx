import './Input.css'
import { useState } from 'react'

export function Input ({ id, type, placeholder, regex, text, inputClass, labelClass }) {
  const handleChange = (event) => {
    const { value } = event.target
    if (!value.match(regex)) {
      event.target.setCustomValidity('Invalid input')
    } else {
      event.target.setCustomValidity('')
    }
  }

  return (
    <div className="input-box-container">
      <label htmlFor={id} className={labelClass}>{text}</label>
      <input
        id={id}
        type={type}
        className={inputClass}
        placeholder={placeholder}
        pattern={regex}
        onChange={handleChange}
      />
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
