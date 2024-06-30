/**
 * Genera un color random hexadecimal
 * @returns {string} Un color random en formato #xxxxxx
 */
export function getRandomColor () {
  /**
   * Cada color (rojo, verde, azul) se representa con 8 bits, en total
   * 256 valores posibles (de 0 a 255), esa combincación de 3 colores
   * se representa 256x256x256 = 16777216 colores posibles
   */
  const color = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + color.padStart(6, '0') // padStart rellena con 0s a la izquierda
}
