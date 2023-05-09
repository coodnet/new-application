import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='navbar__logo'>New`s navigator bar</p>

      <NavLink to='/'>Home</NavLink>
    </div>
  )
}
export default Navbar
