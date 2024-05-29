import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
  const { fact, updateFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const WIDTH_IMAGE = 500

  const handleClick = () => {
    updateFact()
  }

  return (
    <div className='container'>
      <button onClick={ handleClick }>Obtener dato</button>
      {fact && <h2>{fact}</h2> }
      {image && <img src={image} alt='cat image' width={WIDTH_IMAGE}/>}
    </div>
  )
}
