interface Props{
    previousList: string[],
    onLabelClick: (term:string) => void;
}

export const GifPrevious = ({previousList, onLabelClick}: Props) => {
  return (
    <div className='previous-searches'>
        <h2>Busquedas previas</h2>

        <ul className="previous-searches-list">
            {
                previousList.map(element => (
                    <li key={element} onClick={()=> onLabelClick(element)} >
                        {element}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
