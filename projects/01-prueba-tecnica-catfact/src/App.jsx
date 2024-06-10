import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Loader } from './components/Loader'
import { Filter } from './components/filter/Filter'
import { Button } from './components/Button'

export default function App () {
  const { fact, updateFact } = useCatFact()
  const { image, loading, updateImage } = useCatImage({ fact })

  const WIDTH_IMAGE = 500

  const handleClick = () => {
    updateFact()
    updateImage()
  }

  return (
    <div className='container'>

      <h1>App de gatitos (Cat facts)</h1>
      <Filter />
      <Button onClick={ handleClick }>Obtener nuevo dato</Button>
      {fact && <h3>{fact}</h3> }
      {
        loading ? <Loader /> : <img src={image} alt='cat image' width={WIDTH_IMAGE}/>
      }
    </div>
  )
}
