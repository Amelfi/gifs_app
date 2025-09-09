import './mock-data/gifs.mock'
import { GifsList } from './gifs/components/GifsList'
import { CustomHeader } from './search/components/CustomHeader'
import { GifSearch } from './search/components/GifSearch'
import { GifPrevious } from './gifs/components/GifPrevious'
import useGifs from './gifs/hooks/useGifs'


export const GifsApp = () => {

  const  {gifList, previousList, handleOnLabelClick, handleQuery} = useGifs();

  return (
      <>
        {/* Header */}
            <CustomHeader title='Buscador de Gifs' subTitle='Descubre el gif perfecto'/>
        {/* Search */}
        <GifSearch placeholder='Buscar gifs' onQuery={handleQuery}/>

        <GifPrevious previousList={previousList} onLabelClick={handleOnLabelClick}/>

        <GifsList gifs={gifList}/>

    </>
  )
}
