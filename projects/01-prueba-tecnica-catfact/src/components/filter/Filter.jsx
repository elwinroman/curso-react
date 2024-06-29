import './Filter.css'
import { Select } from './Select'
import { Input, InputColor, InputCheckboxWithLabel } from './Input'
import { Button } from '../Button'
import { SELECT_FILTER_OPTIONS, FILTER_OPTIONS, FONT_OPTIONS } from '../../constants/filter-options'
import { useDisabledInputColor } from '../../hooks/useDisabledInputColor'

export function Filter ({ updateFact }) {
  const INPUT_CHECKED = false // Para el input checkbox, y el input color deshabilitado

  const { filter, tipo } = SELECT_FILTER_OPTIONS
  const { disabledInputColor, updateDisabledInputColor } = useDisabledInputColor(INPUT_CHECKED)

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
                <Select label={filter.label} options={filter.options} />
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
                  <InputColor label="Custom color filter" disabled={disabledInputColor}/>
                  <InputCheckboxWithLabel label="Activar filtro por color" updateDisabledInputColor={updateDisabledInputColor} checked={!disabledInputColor} />
                </div>
              </div>
            </section>

            <section className="filter-wrapp">
              <h4 className="filter-title">Filter text</h4>
              <div className="filter-group">
                {
                  FONT_OPTIONS.map(element => (
                    <Select
                      key={`prop-${element.id}`}
                      label={element.label}
                      options={element.options}
                    />
                  ))
                }
                <InputColor label="FontColor" initialColor="#222222" />
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
