// const CAT_IMAGE_URL = 'https://cataas.com/cat'

export async function getRandomImage ({ parameters }) {
  return Promise.resolve('https://img.freepik.com/vector-gratis/plantilla-web-construccion-estilo-plano_23-2147774304.jpg?w=740&t=st=1717125385~exp=1717125985~hmac=92bd43cc375ecd1ef33a93537b3623eb29b5ae57f5ac953a0cab082bcc3171e5')

  /* const response = await fetch(`${CAT_IMAGE_URL}?json=true`)
  const data = await response.json()
  return `${CAT_IMAGE_URL}/${data._id}${parameters}` */
}
