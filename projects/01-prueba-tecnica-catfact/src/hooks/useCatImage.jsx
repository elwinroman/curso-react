import { useState, useEffect } from 'react'
import { getRandomImage } from '../services/image'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!fact) return
    if (!loading) setLoading(true)

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
    getRandomImage({ parameters })
      .then(urlImage => {
        setImage(urlImage)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        console.error('Error fetching cat image')
      })
  }, [fact])

  return { image, loading }
}
