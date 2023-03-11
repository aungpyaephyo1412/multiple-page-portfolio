import {Link} from "react-router-dom";
import {BsDiscord, BsGithub, BsStackOverflow, BsYoutube} from 'react-icons/bs'
import {AiOutlineCodepenCircle} from 'react-icons/ai'
import {FaLongArrowAltRight} from 'react-icons/fa'

const Main = () => {
    return (
        <section className='bg-url'>
            <div className="container mx-auto px-4 py-5 overflow-hidden">
                <div className='w-full min-h-screen  flex justify-center items-center'>
                    {/*<div className='w-full mb-4' style={{height:"75px"}}></div>*/}
                    <div className="w-full text-center p-5 text-white">
                        <h1 className='text-4xl font-semibold mb-6'>Welcome From Typle's World <span
                            className='text-red-600'>&hearts;</span></h1>
                        <p className='text-2xl mb-4 '>I am a Web Developer</p>
                        <div className='flex justify-center gap-x-4 items-center mb-4'>
                            <Link target='_blank' to='https://github.com/typle445'>
                                <BsGithub className='text-3xl'/>
                            </Link>
                            <Link target='_blank' to='#'>
                                <BsDiscord className='text-3xl text-blue-500'/>
                            </Link>
                            <Link target='_blank' to='https://www.youtube.com/channel/UCyOuFpk3FQe1E1fNI3ad4tg'>
                                <BsYoutube className='text-3xl text-red-600'/>
                            </Link>
                            <Link target='_blank' to='https://codepen.io/typle'>
                                <AiOutlineCodepenCircle className='text-4xl'/>
                            </Link>
                            <Link target='_blank' to='https://stackoverflow.com/users/20815687/typle'>
                                <BsStackOverflow className='text-3xl text-red-500'/>
                            </Link>
                        </div>
                        <Link to='/projects'>
                            <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Go to see my projects
                                <FaLongArrowAltRight className='ml-1'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Main