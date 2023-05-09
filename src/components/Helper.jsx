import axios from 'axios'

async function FetchData(url, state) {
  try {
    const response = await axios.get(url, state)
    state(response.data)
  } catch (error) {
    console.error(error)
  }
}

export default FetchData
