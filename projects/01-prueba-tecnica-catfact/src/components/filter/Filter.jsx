import './Filter.css'
import { Select } from './Select'
import { Input, InputColor, InputCheckboxWithLabel } from './Input'
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
        <div className="form-container">
          <div className="form-input-box">
            <section className="filter-wrapp">
              <h4 className="filter-title">Filter principal</h4>
              <div className="filter-group">
                <Select label={tipo.label} options={tipo.options} />
                <Select label={filter.label} options={filter.options} updateDisabled={updateDisabled}/>
              </div>
            </section>

            <section className="filter-wrapp">
              <h4 className="filter-title">Filter custom (personalizado)</h4>
              <div className="filter-group">
              {
                FILTER_OPTIONS.map(element => (
                  <Input
                    key={`prop-${element.id}`}
                    id={element.id}
                    text={element.text}
                    type={element.type}
                    placeholder={element.placeholder}
                    inputClass={element.inputClass}
                    labelClass={element.labelClass}
                    regex={element.regex}
                    validationErrorMessage={element.validationErrorMessage}
                  />
                ))
              }
                <div className="filter-option-color">
                  <InputColor label="Custom color filter" disabled={disabled}/>
                  <InputCheckboxWithLabel label="Activar filtro por color"/>
                </div>
              </div>
            </section>

            <section className="filter-wrapp">
              <h4 className="filter-title">Filter text</h4>
              <div className="filter-group">
                <InputColor label="FontColor" disabled={false}/>
                <InputColor label="FontColor" disabled={false}/>
              </div>
            </section>
          </div>

          <div className="form-submit-box">
            <Button type="submit">Obtener nuevo dato</Button>
          </div>
        </div>
      </form>

    </div>
  )
}
