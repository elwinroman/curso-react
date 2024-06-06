import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Filter } from './components/filter/Filter'

export default function App () {
  const { fact, updateFact } = useCatFact()
  const { image } = useCatImage({ fact })
  const { image, loading, updateImage } = useCatImage({ fact })

  const WIDTH_IMAGE = 500

  const handleClick = () => {
    updateFact()
  }

  return (
    <div className='container'>
      <button onClick={ handleClick }>Obtener dato</button>
      {fact && <h3>{fact}</h3> }
      {
        loading ? <Loader /> : <img src={image} alt='cat image' width={WIDTH_IMAGE}/>
      }
    </div>
  )
}
