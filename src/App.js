import './App.css'
import Home from './components/Home'
import Routing from './Router/Routing'

function App() {
  return (
    <div className='App'>
      {/* https://api.spaceflightnewsapi.net/v3/articles */}

      <Routing />
    </div>
  )
}

export default App
