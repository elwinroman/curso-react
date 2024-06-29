import './Filter.css'
import { Select } from './Select'
import { Input, InputColor, InputCheckboxWithLabel } from './Input'
import { Button } from '../Button'
import { SELECT_FILTER_OPTIONS, FILTER_OPTIONS, FONT_OPTIONS } from '../../constants/filter-options'
import { useInputColor } from '../../hooks/useInputColor'

export function Filter ({ updateFact }) {
  const DISABLED_INPUT_COLOR = {
    customColor: true,
    fontColor: true,
    fontBackground: true
  } // true: disabled, false: enabled

  const { filter, tipo } = SELECT_FILTER_OPTIONS
  const {
    disabledInputColor: disabledInputColor1,
    updateDisabledInputColor: updateDisabledInputColor1
  } = useInputColor({ _disabled: DISABLED_INPUT_COLOR.customColor })
  const {
    disabledInputColor: disabledInputColor2,
    updateDisabledInputColor: updateDisabledInputColor2
  } = useInputColor({ _disabled: DISABLED_INPUT_COLOR.fontColor })
  const {
    disabledInputColor: disabledInputColor3,
    updateDisabledInputColor: updateDisabledInputColor3
  } = useInputColor({ _disabled: DISABLED_INPUT_COLOR.fontBackground })

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
                  <InputColor label="Custom color filter" disabled={disabledInputColor1}/>
                  <InputCheckboxWithLabel
                    label={`${disabledInputColor1 ? 'Habilitar' : 'Deshabilitar'} filtro por color`}
                    updateDisabledInputColor={updateDisabledInputColor1}
                    checked={!disabledInputColor1} />
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
                <div className="filter-option-color">
                  <InputColor
                    label="Font color"
                    disabled={disabledInputColor2}
                  />
                  <InputCheckboxWithLabel
                    label={`${disabledInputColor2 ? 'Habilitar' : 'Deshabilitar'} font color`}
                    updateDisabledInputColor={updateDisabledInputColor2}
                    checked={!disabledInputColor2}
                  />
                </div>

                <div className="filter-option-color">
                  <InputColor
                    label="Font background"
                    disabled={disabledInputColor3}
                  />
                  <InputCheckboxWithLabel
                    label={`${disabledInputColor3 ? 'Habilitar' : 'Deshabilitar'} font background`}
                    updateDisabledInputColor={updateDisabledInputColor3}
                    checked={!disabledInputColor3}
                  />
                </div>

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
