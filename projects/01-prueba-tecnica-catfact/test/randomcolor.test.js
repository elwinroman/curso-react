import { describe, expect, it } from 'vitest'
import { getRandomColor } from '../src/utils/util'

describe('Pruebas getRandomColor()', () => {
  it('Debería retornar un color de tipo string', () => {
    const colorHex = getRandomColor()
    expect(colorHex).toBeTypeOf('string')
  })

  it('Debería retornar un color con el símbolo # delante', () => {
    const colorHex = getRandomColor()
    const simbolo = colorHex.charAt(0)
    expect(simbolo).toEqual('#')
  })

  it('Debería retornar un color hexadecimal de 6 caracteres (no incluye #) [x10 times]', () => {
    for (let i = 0; i < 11; i++) { // Repetir 10 veces el test
      const colorHex = getRandomColor()
      const color = colorHex.slice(1)
      expect(color).toHaveLength(6)
    }
  })

  it('Debería retornar un color hexadecimal válido [x10 times]', () => {
    for (let i = 0; i < 11; i++) { // Repetir 10 veces el test
      const colorHex = getRandomColor()
      const color = colorHex.slice(1)
      const regex = /^[0-9A-Fa-f]{6}$/
      expect(color).toMatch(regex)
    }
  })
})
