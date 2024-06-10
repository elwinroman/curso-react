import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState(null)

  const updateFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  useEffect(() => {
    getRandomFact().then(fact => setFact(fact))
  }, [])

  return { fact, updateFact }
}
