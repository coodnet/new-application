import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { id, img, title, description, date } = props
  // const datesy = date.slice(0, 4)
  // const day = date.slice(8, 10)
  // function dateFilter(dates) {
  //   const month = dates.slice(5, 7)
  //   switch (month) {
  //     case '01':
  //       return 'January'
  //     case '02':
  //       return 'February'
  //     case '03':
  //       return 'March'
  //     case '04':
  //       return 'April'
  //     case '05':
  //       return 'May'
  //     case '06':
  //       return 'June'
  //     case '07':
  //       return 'july'
  //     case '08':
  //       return 'August'
  //     case '09':
  //       return 'September'
  //     case '10':
  //       return 'October'
  //     case '11':
  //       return 'November'
  //     case '12':
  //       return 'December'
  //     default:
  //       break
  //   }
  // }

  console.log(props)

  return (
    <div className='Card'>
      <div className='card__img'>
        <img src={img} alt='news image' />
      </div>
      <h2 className='card__title'>{title}</h2>
      <p className='card__descr'>{description}</p>

      <p className='card__date'>
        {date} <Link to={`/home/single/${id}`}>read more</Link>
      </p>
    </div>
  )
}
export default Card
