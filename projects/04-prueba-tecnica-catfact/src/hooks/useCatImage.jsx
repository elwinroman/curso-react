import { useState, useEffect } from 'react'
import { getRandomImage } from '../services/image'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ', 3).join(' ')
    const options = {
      fontColor: 'orange',
      fontSize: '20'
    }

    let urlOptions = ''
    const entriesOptions = Object.entries(options)

    for (const [i, [key, value]] of entriesOptions.entries(options)) {
      if (i < entriesOptions.length - 1) urlOptions += `${key}=${value}&`
      else urlOptions += `${key}=${value}`
    }

    const parameters = `/says/${firstWords}?${urlOptions}`
    getRandomImage({ parameters }).then(urlImage => setImage(urlImage))
  }, [fact])

  return { image }
}
