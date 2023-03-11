const About = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='min-h-screen'>
                    <div className='w-full mb-4' style={{height: "75px"}}></div>
                    <div className='flex flex-wrap'>
                        <div className=' w-full md:w-2/4 px-4'>
                            <div>
                                <div className='flex justify-center items-center mb-5'>
                                    <h1 className='text-xl font-bold'>My Self</h1>
                                </div>
                                <p className='leading-8 text-justify text-black'><span className='text-xl font-bold'>I</span> am a
                                    junior developer. I am trying to show my ability. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Aspernatur at modi nisi nobis odio reprehenderit sequi,
                                    sit voluptatem. Adipisci dignissimos dolore esse exercitationem illo itaque sunt tenetur
                                    ut velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                                    consequuntur culpa cum, distinctio dolore dolores earum expedita fugiat harum in ipsam
                                    nulla qui quod, reiciendis sequi sint vel voluptas voluptatibus Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Ad adipisci aliquam, amet consequatur consequuntur
                                    dolores doloribus ex excepturi exercitationem illum iusto magnam nulla optio placeat
                                    provident quia reprehenderit temporibus tenetur. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias aspernatur .</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/4 px-6 '>
                            <div className='flex justify-center items-center mb-5'>
                                <h1 className='text-xl font-bold'>My Skills</h1>
                            </div>
                            <div className='flex gap-x-3'>
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>HTML</p>
                                        <span className='text-md '>95%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "95%"}}></div>
                                    </div>
                                </div>
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>CSS</p>
                                        <span className='text-md '>85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "85%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-3">
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>Javascript</p>
                                        <span className='text-md '>75%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "75%"}}></div>
                                    </div>
                                </div>
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>SCSS</p>
                                        <span className='text-md '>65%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "65%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-x-3'>
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>Tailwindcss</p>
                                        <span className='text-md '>85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "85%"}}></div>
                                    </div>
                                </div>
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>Bootstrap</p>
                                        <span className='text-md '>95%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "95%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-3">
                                <div className='w-2/4 mb-2 py-2'>
                                    <div className='flex justify-between items-center px-2'>
                                        <p className='text-md  uppercase'>React</p>
                                        <span className='text-md '>85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                             style={{width: "85%"}}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About