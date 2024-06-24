/**
 * @desc Get random color
 * @returns {string} Random color #xxxxxx
 */
export function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
