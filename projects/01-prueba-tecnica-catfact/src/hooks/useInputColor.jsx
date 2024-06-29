import { useState } from 'react'

export function useInputColor ({ _disabled }) {
  const [disabledInputColor, setDisabledInputColor] = useState(_disabled)

  const updateDisabledInputColor = (_disabled) => {
    setDisabledInputColor(_disabled)
  }

  return { disabledInputColor, updateDisabledInputColor }
}
