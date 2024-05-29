const CAT_IMAGE_URL = 'https://cataas.com/cat'

export async function getRandomImage ({ parameters }) {
  const response = await fetch(`${CAT_IMAGE_URL}?json=true`)
  const data = await response.json()
  return `${CAT_IMAGE_URL}/${data._id}${parameters}`
}
