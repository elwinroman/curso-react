import './Filter.css'

export function Select ({ label, options }) {
  return (
    <div className="input-box-container">
      <label className="input-label-base">{label}</label>
      <select className="input-base type-select">
        {options.map(element => (
          <option key={element.value} value={element.value}>{element.name}</option>
        ))}
      </select>
    </div>
  )
}
