import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-5 text-white md:px-10'>
      <Link to={"/"}>IPAPI</Link>
      <div className='hidden gap-1 md:gap-5 justify-evenly md:flex'>
        <Link to={"/"} className='p-2 transition-all duration-500 border-r hover:bg-gray-200 hover:text-black'>Home</Link>
        <Link to={"/"} className='p-2 transition-all duration-500 border-r hover:bg-gray-200 hover:text-black'>About</Link>
        <Link to={"/"} className='p-2 transition-all duration-500 border-r hover:bg-gray-200 hover:text-black'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
