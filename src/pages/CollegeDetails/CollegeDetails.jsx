import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CollegeDetails = () => {
    const collegeDetails = useLoaderData()
    const {_id, collegeData, eventData,  sportData, researchData}  = collegeDetails 
    return (
        <div className="py-24 text-black">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Colleges</h2>
                    <div className="">

                                <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center">
                                    <img
                                        src={collegeData.collegeImage}
                                        alt={collegeData.collegeName}
                                        className="w-full h-96 object-cover mb-4"
                                    />
                                    <h3 className="text-xl font-bold mb-2 text-white">
                                        {collegeData.collegeName}
                                    </h3>

                                    <Rating style={{ maxWidth: 80 }} value={collegeData.collegeRatings} readOnly />
                                    <p className='text-white'>{collegeData.admissionProcess}</p>
                                    
                                </div>
                    </div>
                </div>

                {/* done */}


                {/* Events */}
                <section  className="py-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ">
                              <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-1">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                  {eventData.eventName}
                                </h3>
                  
                                <h2 className='text-white'>{eventData.eventDate}</h2>
                                <p className='text-white p-2'>{eventData.eventDescription}</p>
                  
                              </div> 
                        </div>
                    </div>
                </section>

                {/* researchWorks */}
                <section  className="py-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Research Work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                             <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-1">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                  {researchData.researchAuthor}
                                </h3>
                  
                                <h2 className='text-white'>{researchData.researchPublishedDate}</h2>
                                <h2 className='text-white'>{researchData.researchAbstrac}</h2>
                                <p className='text-white p-2'>{researchData.researchFileLink}</p>
                  
                              </div> 
                        </div>
                    </div>
                </section>

                {/* sportsCategories */}
                <section  className="py-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-black"> Sports</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                              <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-1">
                                <h3 className="text-xl font-bold mb-2 text-white">
                                  {sportData.sportName}
                                </h3>
                  
                                <h2 className='text-white'>{sportData.sportDate}</h2>
                                <p className='text-white'>{sportData.sportDescription}</p>

                  
                              </div> 
                        </div>
                    </div>
                </section>

        </div>
    );
};

export default CollegeDetails;