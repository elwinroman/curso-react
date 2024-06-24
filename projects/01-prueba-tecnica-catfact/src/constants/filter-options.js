export const SELECT_FILTER_OPTIONS = {
  tipo: {
    label: 'Tipo',
    options: [
      {
        name: '--',
        value: ''
      },
      {
        name: 'Medio',
        value: 'medium'
      },
      {
        name: 'Cuadrado',
        value: 'square'
      },
      {
        name: 'Pequeño',
        value: 'small'
      },
      {
        name: 'ExtraPequeño',
        value: 'xsmall'
      }
    ]
  },
  filter: {
    label: 'Filter',
    options: [
      {
        name: '--',
        value: ''
      },
      {
        name: 'Mono',
        value: 'mono'
      },
      {
        name: 'Negate',
        value: 'sepia'
      },
      {
        name: 'Custom',
        value: 'custom'
      }
    ]
  }
}

export const FILTER_OPTIONS = [
  {
    id: crypto.randomUUID(),
    text: 'Blur',
    type: 'text',
    placeholder: '30',
    inputClass: 'input-base type-text',
    labelClass: 'input-label-base',
    regex: /^[0-9]$|^[1-9][0-9]$|^100$|^\s*$/,
    validationErrorMessage: 'El número debe entero entre 0 y 100'
  },
  {
    id: crypto.randomUUID(),
    text: 'Brightness',
    type: 'text',
    placeholder: '30',
    inputClass: 'input-base type-text',
    labelClass: 'input-label-base',
    regex: /^[0-9]$|^[1-9][0-9]$|^100$|^\s*$/,
    validationErrorMessage: 'El número debe ser entero entre 0 y 100'
  },
  {
    id: crypto.randomUUID(),
    text: 'Saturation',
    type: 'text',
    placeholder: '30',
    pattern: '^(((0|1).[0-9]{1,2})|1|2|2.0)$',
    inputClass: 'input-base type-text',
    labelClass: 'filter-label-base',
    regex: /^(?:0|1).[0-9]{1,2}$|^[0-2]$|^2.0$|^\s*$/,
    validationErrorMessage: 'El número debe ser decimal entre 0.0 y 2.0'
  },
  {
    id: crypto.randomUUID(),
    text: 'Hue',
    type: 'text',
    placeholder: 'Hue rotation in degrees',
    inputClass: 'input-base type-text',
    labelClass: 'input-label-base',
    regex: /^[0-9]$|^[1-9][0-9]$|^[1-2][0-9][0-9]$|^3[0-5][0-9]$|^360$|^\s*$/,
    validationErrorMessage: 'El número debe ser entero entre 0 y 360'
  },
  {
    id: crypto.randomUUID(),
    text: 'Lightness',
    type: 'text',
    placeholder: 'Lightness addend',
    inputClass: 'input-base type-text',
    labelClass: 'input-label-base',
    regex: /^[0-9]$|^[1-9][0-9]$|^100$|^\s*$/,
    validationErrorMessage: 'El número debe ser   entero entre 0 y 100'
  }
]

export const FONT_OPTIONS = [
  {
    id: crypto.randomUUID(),
    label: 'Font family',
    options: [
      {
        name: '--',
        value: ''
      },
      {
        name: 'Andale Mono',
        value: 'Andale%20Mono'
      },
      {
        name: 'Impact',
        value: 'Impact'
      },
      {
        name: 'Arial',
        value: 'Arial'
      },
      {
        name: 'Arial Black',
        value: 'Arial%20Black'
      },
      {
        name: 'Comic Sans MS',
        value: 'Comic%20Sans%20MS'
      },
      {
        name: 'Courier New',
        value: 'Courier%20New'
      },
      {
        name: 'Georgia',
        value: 'Georgia'
      },
      {
        name: 'Times New Roman',
        value: 'Times%20New%20Roman'
      },
      {
        name: 'Verdana',
        value: 'Verdana'
      },
      {
        name: 'Webdings',
        value: 'Webdings'
      }
    ]
  }
]
