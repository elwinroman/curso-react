const CAT_FACT_URL = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const response = await fetch(CAT_FACT_URL)
  const data = await response.json()
  // return data.fact
  return 'Hola mundo, hola gato'
}
