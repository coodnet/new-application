import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar/Navbar'
import Single from '../components/Single'
import ErrorPage from '../components/Errorring'

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/single/:id' element={<Single />} />
        <Route path='/error404' element={<ErrorPage />} />
        <Route path='*' element={<Navigate to='/error404' />} />
      </Routes>
    </>
  )
}
export default Routing
