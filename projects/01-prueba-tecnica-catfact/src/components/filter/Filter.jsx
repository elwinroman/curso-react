import './Filter.css'
import { Select } from './Select'
import { SELECT_FILTER_OPTIONS, FILTER_OPTIONS } from '../../constants/filter-options'

export function Filter() {
  return (
    <div className="filter-container">
      {
        SELECT_FILTER_OPTIONS.map(element => (
          <Select key={element.id} label={element.label} options={element.options} />
        ))
      }
      {
        FILTER_OPTIONS.map(element => (
          <div className="filter-box-container">
            <label htmlFor={element.id} className={element.class}>{element.text}</label>
            <input type={element.type} className="filter-box-base type-input-text" placeholder={element.placeholder} />
          </div>
        ))
      }

    </div>
  )
}
