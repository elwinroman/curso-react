import { useState } from 'react'

export function useDisabledInputColor ({ _disabled = true }) {
  const [disabledInputColor, setDisabledInputColor] = useState(_disabled)

  const updateDisabledInputColor = (_disabled) => {
    setDisabledInputColor(_disabled)
  }

  return { disabledInputColor, updateDisabledInputColor }
}
