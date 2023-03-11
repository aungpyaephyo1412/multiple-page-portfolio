import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 container mx-auto">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="/" className="flex items-center">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DEV.Typle</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link target='_blank' to="https://flowbite.com/"
                                      className="hover:underline">Flowbite</Link>
                            </li>
                            <li>
                                <Link target='_blank' to="https://tailwindcss.com/" className="hover:underline">Tailwind
                                    CSS</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow
                            us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link target='_blank' to="https://github.com/typle445"
                                      className="hover:underline ">Github</Link>
                            </li>
                            <li>
                                <Link target='_blank' to="#" className="hover:underline">Discord</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link to='#' className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to='#' className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link target='_blank'
                                                                                                   to="https://google.com/"
                                                                                                   className="hover:underline">Google™</Link>. All Rights Reserved.
            </span>
            </div>
        </footer>

    )
}
export default Footer