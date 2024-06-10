import './Filter.css'

export function Select ({ key, label, options }) {
  return (
    <div className="filter-box-container">
      <label htmlFor={ key } className="filter-label-base">{ label }</label>
      <select id={ key } className="filter-box-base type-select">
        { options.map(element => (
            <option key={ element.value } value={ element.value }>{ element.name }</option>
        )) }
      </select>
    </div>
  )
}
