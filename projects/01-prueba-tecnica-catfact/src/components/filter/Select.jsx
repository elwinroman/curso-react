import './Filter.css'

export function Select ({ label, options, updateDisabled }) {
  const CUSTOM_OPTION = 'custom'

  const onChange = (event) => {
    if (!updateDisabled) return

    const { value } = event.target
    value === CUSTOM_OPTION ? updateDisabled(false) : updateDisabled(true)
  }
  return (
    <div className="input-box-container">
      <label className="input-label-base">{label}</label>
      <select className="input-base type-select" onChange={onChange}>
        {options.map(element => (
          <option key={element.value} value={element.value}>{element.name}</option>
        ))}
      </select>
    </div>
  )
}
