import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CollegeDetails = () => {
    const collegeDetails = useLoaderData()
    const {_id, name, image, ratings, events, admissionProcess, researchWorks, sportsCategories}  = collegeDetails 
    return (
        <div className="py-24 text-black">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Colleges</h2>
                    <div className="">

                                <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-96 object-cover mb-4"
                                    />
                                    <h3 className="text-xl font-bold mb-2 text-white">
                                        {name}
                                    </h3>

                                    <Rating style={{ maxWidth: 80 }} value={ratings} readOnly />
                                    <p className='text-white'>{admissionProcess}</p>
                                    
                                </div>
                    </div>
                </div>

                {/* done */}


                {/* Events */}
                <section  className="py-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ">
                            {
                                events?.map(event =>  <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-1">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                  {event.eventTitle}
                                </h3>
                  
                                <h2 className='text-white'>{event.date}</h2>
                                <p className='text-white p-2'>{event.description}</p>
                  
                              </div> )
                            }
                        </div>
                    </div>
                </section>

                {/* researchWorks */}
                <section  className="py-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Research Work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                            {
                                researchWorks?.map(researchWork =>  <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-1">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                  {researchWork.researchTitle}
                                </h3>
                  
                                <h2 className='text-white'>{researchWork.author}</h2>
                                <h2 className='text-white'>{researchWork.publishedDate}</h2>
                                <p className='text-white p-2'>{researchWork.abstract}</p>
                  
                              </div> )
                            }
                        </div>
                    </div>
                </section>

                {/* sportsCategories */}
                <section  className="py-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Sports</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                            {
                                sportsCategories?.map(sports =>  <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-1">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                  {sports.sportsName}
                                </h3>
                  
                                <h2 className='text-white'>{sports.description}</h2>
                  
                              </div> )
                            }
                        </div>
                    </div>
                </section>

        </div>
    );
};

export default CollegeDetails;