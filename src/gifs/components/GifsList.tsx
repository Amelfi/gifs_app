
import '../../mock-data/gifs.mock'
import type { Gif } from '../../mock-data/gifs.mock'

type GifsCardProps = {
    gifs: Gif[]
  }
export const GifsList = ({gifs}: GifsCardProps ) => {
  return (
    <>

      <div className='gifs-container'>
          {gifs.map( gif => (
            <div key={gif.id} className='gif-card'>
              <img src={gif.url} alt={gif.title} />
              <h3>{gif.title}</h3>
              <p>{gif.height}x{gif.width}(1.5Mb)</p>
            </div>
          ))}
        </div>
                  
        
    </>
  )
}
