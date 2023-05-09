import { useEffect, useState } from 'react'
import FetchData from './Helper'
import Card from './Card'
import Navbar from './Navbar/Navbar'
function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    FetchData(`https://api.spaceflightnewsapi.net/v3/articles/`, setData)
  }, [])

  // console.log(data)

  return (
    <div>
      <Navbar />

      {data.map((news) => (
        <Card
          date={news.publishedAt}
          id={news.id}
          img={news.imageUrl}
          title={news.title}
          description={news.summary}
        />
      ))}
    </div>
  )
}

export default Home
