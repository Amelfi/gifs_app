import './mock-data/gifs.mock'
import { mockGifs, type Gif } from './mock-data/gifs.mock'
import { GifsList } from './gifs/components/GifsList'
import { CustomHeader } from './search/components/CustomHeader'
import { GifSearch } from './search/components/GifSearch'
import { GifPrevious } from './gifs/components/GifPrevious'
import { useState } from 'react'


export const GifsApp = () => {
  const handleOnLabelClick = (term: string) => {

    setPreviousList([...previousList, term]);
    console.log(previousList);
  }
  const [previousList, setPreviousList] = useState(['superman']);

        <GifsList gifs={mockGifs}/>
        const [mockList, setMockList] = useState(mockGifs)

  const handleQuery = (query:string) => {
    const filterMock = mockList.filter((value:Gif) => {
      if(value.title == query){
        return value;
      }

    })

    if(filterMock.length > 0){
      setMockList(filterMock);
    }else{
      setMockList(mockGifs);
    }
  }

  return (
      <>
        {/* Header */}
            <CustomHeader title='Buscador de Gifs' subTitle='Descubre el gif perfecto'/>
        {/* Search */}
        <GifSearch placeholder='Buscar gifs' onQuery={handleQuery}/>

        <GifPrevious previousList={previousList} onLabelClick={handleOnLabelClick}/>

        <GifsList gifs={mockList}/>

       
    </>
  )
}
