import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import FetchData from './Helper'

const Single = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    FetchData(`https://api.spaceflightnewsapi.net/v3/articles/${id}`, setData)
  }, [])
  console.log(data)

  return (
    <div className='Card'>
      <div className='card__img'>
        <img src={data.imageUrl} alt='news image' />
      </div>
      <h2 className='card__title'>{data.title}</h2>
      <p className='card__descr'>{data.summary}</p>

      <p className='card__date'>
        {data.updatedAt} <NavLink to='/'>Back</NavLink>
      </p>
    </div>
  )
}
export default Single
