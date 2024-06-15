// const CAT_FACT_URL = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  return Promise.resolve('Hola mundo, hola gato')

  /* const response = await fetch(CAT_FACT_URL)
  const data = await response.json()
  return data.fact */
}
