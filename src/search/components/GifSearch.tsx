import { useEffect, useState } from "react";

interface Props{
  placeholder: string
  onQuery: (search:string) => void;
}
export const GifSearch = ({placeholder = 'Buscar', onQuery}: Props) => {

  const [query, setQuery] = useState('')

  const handleSubmit = ()=>{

    onQuery(query);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      handleSubmit()
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(query);
      onQuery(query)
    }, 700);
  
    return () => {
        clearTimeout(timeoutId);
    }
  }, [query, onQuery])
  
  return (
    <div className="search-container">
        <input type="text" 
          placeholder={placeholder} 
          value={query}
          onChange={(event) => setQuery(event.target.value) }
          onKeyDown={ handleKeyDown }
          />
        <button onClick={handleSubmit}>Buscar</button>
    </div>
  )
}
