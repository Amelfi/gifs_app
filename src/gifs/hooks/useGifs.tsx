import { useRef, useState } from 'react'
import { getGiphy } from '../actions/get-giphy.action';
import type { Gif } from '../interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {

    const [previousList, setPreviousList] = useState<string[]>([]);
    const [gifList, setGifList] = useState<Gif[]>([]);
    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleOnLabelClick = async(term: string) => {

        if(gifsCache.current[term]){
            setGifList(gifsCache.current[term]);
            return;
        }

        const gifsArray =  await getGiphy(term);
        setGifList(gifsArray)
    }
    
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
        gifsCache.current[query] = gifsArray;
    
    }

    return {
        //values
        gifList,
        previousList,
        //methods
        handleOnLabelClick,
        handleQuery
    }
}

export default useGifs