import './Input.css'
import { useState } from 'react'
import { getRandomColor } from '../../utils/util'

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

export function InputColor ({ label, disabled = false, initialColor = getRandomColor() }) {
  const [color, setColor] = useState(initialColor)
  const id = crypto.randomUUID()

  const handleChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="input-box-container">
      <label className={`input-label-base ${disabled ? 'disabled' : ''}`}>{ label }</label>
      <div className={`input-base type-color ${disabled ? 'disabled' : ''}`} >
        <input
          id={id}
          onChange={handleChange}
          type="color"
          value={color}
          disabled={disabled}
        />
        <label htmlFor={id}>{color.toUpperCase()}</label>
      </div>
    </div>
  )
}

export function InputCheckboxWithLabel ({ label, updateDisabledInputColor, checked = false }) {
  const handleChange = (event) => {
    if (!updateDisabledInputColor) return

    if (event.target.checked) updateDisabledInputColor(false)
    else updateDisabledInputColor(true)
  }

  return (
    <div className="type-checkbox">
      <input id="cbox" type="checkbox" className="input-type-checkbox" defaultChecked={checked} onChange={handleChange}/>
      <label className="label-type-checkbox" htmlFor="cbox">{label}</label>
    </div>
  )
}
