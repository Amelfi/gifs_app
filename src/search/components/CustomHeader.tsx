interface Props{
    title:string,
    subTitle:string
}
export const CustomHeader = ({title, subTitle }: Props) => {
  return (
    <>
        <div className='content-center'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    </>
  )
}
