import './Filter.css'
import { Select } from './Select'
import { Input, InputColor } from './Input'
import { Button } from '../Button'
import { SELECT_FILTER_OPTIONS, FILTER_OPTIONS } from '../../constants/filter-options'
import { useDisabled } from '../../hooks/useDisabled'

export function Filter ({ updateFact }) {
  const { filter, tipo } = SELECT_FILTER_OPTIONS
  const { disabled, updateDisabled } = useDisabled()

  const handleSubmit = (event) => {
    event.preventDefault()
    updateFact()
  }

  return (
    <div className="filter-container">
      <form action="" onSubmit={handleSubmit}>

        <div className="group">
          <Select label={tipo.label} options={tipo.options} />
          <Select label={filter.label} options={filter.options} updateDisabled={updateDisabled}/>
          <InputColor label="Custom filter" disabled={disabled}/>

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

          <InputColor label="FontColor" disabled={false}/>
        </div>

        <Button type="submit">Obtener nuevo dato</Button>
      </form>

    </div>
  )
}
