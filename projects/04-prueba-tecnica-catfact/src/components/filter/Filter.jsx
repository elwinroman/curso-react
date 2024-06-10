import './Filter.css'
import { Select } from './Select'
import { SELECT_OPTIONS } from '../../constants/filter-options'

export function Filter () {
  return (
    <div className="filter-container">
      { SELECT_OPTIONS.map(element => (
          <Select key={element.id} label={ element.label } options={ element.options } />
      )) }

      <div className="filter-box-container">
        <label htmlFor="" className="filter-label-base">Blur</label>
        <input type="text" className="filter-box-base type-input-text" placeholder="30" />
      </div>

      <div className="filter-box-container">
        <label htmlFor="" className="filter-label-base">Brightness</label>
        <input type="text" className="filter-box-base type-input-text" placeholder="30" />
      </div>

      <div className="filter-box-container">
        <label htmlFor="" className="filter-label-base">Saturation</label>
        <input type="text" className="filter-box-base type-input-text" placeholder="30" />
      </div>

      <div className="filter-box-container">
        <label htmlFor="" className="filter-label-base">Hue</label>
        <input type="text" className="filter-box-base type-input-text" placeholder="30" />
      </div>

      <div className="filter-box-container">
        <label htmlFor="" className="filter-label-base">Lightness</label>
        <input type="text" className="filter-box-base type-input-text" placeholder="#000" />
      </div>

    </div>
  )
}
