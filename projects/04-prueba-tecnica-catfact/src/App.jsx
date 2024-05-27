import { useState, useEffect } from 'react'
import './App.css'

export default function App () {
  const CAT_FACT_URL = 'https://catfact.ninja/fact'
  const CAT_IMAGE_URL = 'https://cataas.com/cat'

  const [fact, setFact] = useState(null)
  const [urlImage, setUrlImage] = useState(null)

  const WIDTH = 500

  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ', 3).join(' ')
    const fontStyles = {
      fontColor: 'orange',
      fontSize: '20',
      width: WIDTH
    }

    let mix = ''
    const entriesFontStyles = Object.entries(fontStyles)

    for (const [i, [key, value]] of entriesFontStyles.entries(fontStyles)) {
      if (i < entriesFontStyles.length - 1) mix += `${key}=${value}&`
      else mix += `${key}=${value}`
    }

    fetch(`${CAT_IMAGE_URL}?json=true`)
      .then(response => response.json())
      .then(data => {
        const url = `${CAT_IMAGE_URL}/${data._id}/says/${firstWords}?${mix}`
        setUrlImage(url)
      })
  }, [fact])

  return (
    <>
      {fact && <h2>{fact}</h2> }

      {urlImage && <img src={urlImage} alt='cat image' width={WIDTH}/>}
    </>
  )
}
