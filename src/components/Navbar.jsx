import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "/zara-2-logo-png-transparent.png"
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const toggleMenu =() =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems =[
        {title:"Clothing & Shoes", path:"/"},
        {title:"Jewelary & Acessories", path:"/"},
        {title:"Toys & Entertainment", path:"/"},
        {title:"Arts & Colleactions", path:"/"},
        {title:"Wedding & Party", path:"/"},
    ]
  return (
    <header className=" xl:px-28 px-4 absolute top-0 right-0 left-0 ">
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
            <FaSearch className='text-Blue w-5 h-5 cursor-pointer hidden md:block'/>
        <a href="/"><img src={logo} alt="" /></a>
        {/*account and shopping btn */}
        <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
            <a href="/" className='flex items-center gap-2'><FaUser className='text-Blue w-5 h-5 cursor-pointer'/>Account</a>
            <a href="/" className='flex items-center gap-2'><FaShoppingBag className='text-Blue w-5 h-5 cursor-pointer'/>Shopping</a>
        </div>
        {/* navbar for small devices*/}
    <div className='sm:hidden'>
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes  className='w-5 h-5 text-Blue'/> : <FaBars className='w-5 h-5 text-Blue'/> 
                }
            </button>
        </div>
        </nav>
        <hr/>
        {/*category items */}
        <div className='pt-4'>
        <ul className={`lg:flex items-center justify-between text-Blue px-4 py-2 rounded hidden } `}>
                {
                    navItems.map(({title,path}) => (
                        <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                             <NavLink
                to={path}
                className={({ isActive}) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>
                        </li>
                    ))
                }
            </ul>
           
        </div>

        {/*only mobile items */}
        <div>
        <ul className={`bg-Blue text-white px-4 py-2 rounded ${isMenuOpen ? "":"hidden" } `}>
                {
                    navItems.map(({title,path}) => (
                        <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                            <Link
                to={path}
                onClick={toggleMenu}
              >
                {title}
              </Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    </header>
  )
}

export default Navbar