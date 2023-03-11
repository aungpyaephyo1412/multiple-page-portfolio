import ContactPic from '../Images/contact.svg'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
const Contact = () => {
  const handleSubmit = (e)=>{
      e.preventDefault()
    console.log('hello')
  }
  return (
       <section className='bg-primary '>
           <div className='min-h-screen container mx-auto'>
               <div className='w-full mb-4' style={{height: "75px"}}></div>
               <div className='flex flex-wrap justify-between items-center'>
                   <div className="w-full md:w-3/12 flex flex-col justify-center items-center gap-4 mb-5 md:mb-0">
                       <AiOutlinePhone className='text-2xl text-blue-500'/>
                       <span className='text-center'>06776706992</span>
                   </div>
                   <div className="w-full md:w-3/12 flex flex-col justify-center items-center gap-4 mb-5 md:mb-0">
                       <AiOutlineMail className='text-2xl text-blue-500'/>
                       <span className='text-center'>aungpyaephyo1145@gmail.com</span>
                   </div>
                   <div className="w-full md:w-3/12 flex flex-col justify-center items-center gap-4 mb-5 md:mb-0">
                       <GoLocation className='text-2xl text-blue-500'/>
                       <span className='text-center'>Myanmar,Mandalay,Kyaukse Township,Kyaukse</span>
                   </div>
               </div>
               <div className='flex justify-center items-center px-4 flex-wrap mt-20 pb-32'>
                   <div className='w-full md:w-2/4'>
                       <img src={ContactPic} alt=""/>
                   </div>
                   <form onSubmit={handleSubmit} className='w-full md:w-2/4 p-4 shadow-lg bg-white rounded-md'>
                       <div className='text-center pb-7 font-bold text-2xl'>
                           Contact Us
                       </div>
                       <div className='flex gap-x-3'>
                           <div className="mb-6 w-2/4">
                               <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name :</label>
                               <input type="text" id="name"
                                      placeholder="exampleName"
                                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                               />
                           </div>
                           <div className="mb-6 w-2/4">
                               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                   email :</label>
                               <input type="email" id="email"
                                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                      placeholder="name@example.com"/>
                           </div>
                       </div>
                       <div className="mb-6">
                           <label htmlFor="Text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                               Question :</label>
                           <input type="text" id="Text"
                                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           />
                       </div>
                       <div className="mb-6">
                           <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                               comment :</label>
                           <textarea id="message" rows="6"
                                     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     placeholder="Leave a comment..."></textarea>
                       </div>
                       <button type="submit"
                               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message
                       </button>
                   </form>
               </div>
           </div>
       </section>
        )
}
export default Contact