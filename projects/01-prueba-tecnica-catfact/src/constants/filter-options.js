export const SELECT_OPTIONS = [
  {
    id: crypto.randomUUID(),
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
  {
    id: crypto.randomUUID(),
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
  },
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
