import { Link } from "react-router-dom"



const Header = () => {
  return (
    <nav className=' flex justify-end gap-6 font-bold tracking-tight  bg-slate-500 p-4 '>
      <Link to='/'>Home</Link>
      <Link to='/aboute'>Aboute</Link>
      <Link to='/product'>Product</Link>
      <Link to='/service'>Service</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Header
