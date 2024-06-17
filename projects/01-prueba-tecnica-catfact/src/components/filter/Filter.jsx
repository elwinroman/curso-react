import './Filter.css'
import { Select } from './Select'
import { Input, InputColor } from './Input'
import { SELECT_FILTER_OPTIONS, FILTER_OPTIONS } from '../../constants/filter-options'

export function Filter () {
  const { filter, tipo } = SELECT_FILTER_OPTIONS

  return (
    <div className="filter-container">
      <form action="">
        <Select label={tipo.label} options={tipo.options} />
        <Select label={filter.label} options={filter.options} />
        <InputColor />

        {
          FILTER_OPTIONS.map(element => (
            <Input
              key={`prop-${element.id}`}
              id={element.id}
              text={element.text}
              type={element.type}
              placeholder={element.placeholder}
              regex={element.regex}
              inputClass={element.inputClass}
              labelClass={element.labelClass}
            />
          ))
        }

        <InputColor />
      </form>

    </div>
  )
}
