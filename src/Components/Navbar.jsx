import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import {BsFacebook, BsInstagram} from 'react-icons/bs';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav
            className="bg-white px-2 sm:px-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to='/' className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white select-none">DEV.Typle</span>
                </Link>
                <div className="flex md:order-2">
                    <Link target='_blank' to='https://www.facebook.com/aung.pyae.phyo.1412'
                          className="text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <BsFacebook className='text-2xl'/>
                    </Link>
                    <Link target='_blank' to='https://www.instagram.com/typle_x_x/'
                          className="text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <BsInstagram className='text-2xl text-red-600'/>
                    </Link>
                    <button type="button" onClick={handleClick} type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <AiOutlineMenu className='text-2xl'/>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "hidden" : "block"}`}
                    id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to='/' onClick={handleClick}
                                     className=" block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' onClick={handleClick}
                                     className=" block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' onClick={handleClick}
                                     className=" block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' onClick={handleClick}
                                     className=" block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar