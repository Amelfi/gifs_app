import './mock-data/gifs.mock'
import { mockGifs } from './mock-data/gifs.mock'
import { GifsList } from './gifs/components/GifsList'
import { CustomHeader } from './search/components/CustomHeader'
import { GifSearch } from './search/components/GifSearch'
import { GifPrevious } from './gifs/components/GifPrevious'
import { getGiphy } from './gifs/actions/get-giphy.action'
import { useState } from 'react';
import { type Gif } from './gifs/interfaces/gif.interface'


export const GifsApp = () => {
  const handleOnLabelClick = async(term: string) => {

    const gifsArray =  await getGiphy(term);
    setGifList(gifsArray)
  }

   
  const [previousList, setPreviousList] = useState(['superman']);

        <GifsList gifs={mockGifs}/>
        const [gifList, setGifList] = useState<Gif[]>([])

  const handleQuery = async(query:string) => {


    //quitar espacios y poner en minuscula.
    query = query.toLowerCase().trim();

    //verificar que query no es un string vacio
    if(!query.length) return;

    
    //verificar que ya no exista
    if(previousList.includes(query)) return;
    
    //que previousList no pase de 8
    setPreviousList([query, ...previousList].splice(0,7))

    const gifsArray =  await getGiphy(query);
    setGifList(gifsArray)
    
    console.log(gifsArray);
    // const filterMock = mockList.filter((value:Gif) => {
    //   if(value.title == query){
    //     return value;
    //   }

    // })

    // if(filterMock.length > 0){
    //   setMockList(filterMock);
    // }else{
    //   setMockList(mockGifs);
    // }
  }

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
