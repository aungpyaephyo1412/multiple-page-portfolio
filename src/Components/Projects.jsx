import {Link} from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai'
import sushi from '../Images/Screenshot (114)_edited.jpg'
import foodie from '../Images/Screenshot (116)_edited.jpg'
import medium from '../Images/Screenshot (115)_edited.jpg'
import facebook from '../Images/Screenshot (117)_edited.jpg'
import flyo from '../Images/Screenshot (119)_edited.jpg'
import foodieMenu from '../Images/Screenshot (120)_edited.jpg'
import Onlineshop from '../Images/Screenshot (121)_edited.jpg'


const Projects = () => {
    return (
      <section className="container mx-auto">
        <div className="min-h-screen">
          <div className="w-full mb-4" style={{ height: "75px" }}></div>
          <div className="flex flex-wrap gap-y-4">
            <div className=" w-full md:w-2/4 px-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={sushi} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sushi Project
                  </h5>
                  <div className="mb-2 flex flex-wrap whitespace-nowrap">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://spiffy-daffodil-000d2e.netlify.app"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-2/4 px-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={flyo} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Flyo Project
                  </h5>
                  <div className="mb-2 flex flex-wrap whitespace-nowrap">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://typle-flyo.netlify.app"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-2/4 px-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={flyo} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Flyo Project
                  </h5>
                  <div className="mb-2 flex flex-wrap whitespace-nowrap">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://typle-flyo.netlify.app"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 px-4 ">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={foodie} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Foodie Clone Project
                  </h5>
                  <div className="mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Js-Library
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://typle-foodie.netlify.app/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 px-4 ">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={facebook} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Facebook Clone Project
                  </h5>
                  <div className="mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://typle-facebook.netlify.app/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 px-4 ">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={foodieMenu} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Flyo Project
                  </h5>
                  <div className="mb-2 flex flex-wrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Tailwindcss
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      React
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://react-foodie-clone.netlify.app"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 px-4 ">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={Onlineshop} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Online Shop Project
                  </h5>
                  <div className="mb-2 flex flex-wrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML{" "}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Tailwindcss
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      React
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    to="https://lively-kashata-5878f6.netlify.app/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live Preview
                    <AiOutlineEye className="text-xl ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Projects