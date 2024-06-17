import { useState } from 'react'

export function useDisabled () {
  const [disabled, setDisabled] = useState(true)

  const updateDisabled = (_disabled) => {
    setDisabled(_disabled)
  }

  return { disabled, updateDisabled }
}
