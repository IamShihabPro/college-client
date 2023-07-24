import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const College = ({college}) => {
    const {collegeData, eventData,  sportData, researchData, _id} = college
    return (
        <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={collegeData.collegeImage}
                alt={collegeData.collegeName}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {collegeData.collegeName}
              </h3>

              <h2 className='text-white'>{collegeData.collegeRatings}</h2>
              <Rating style={{ maxWidth: 70 }} value={collegeData.collegeRatings} readOnly />

              <div className="flex items-center mb-2">
                <Link
                  to={`/collegedetails/${_id}`}
                 
                  className="mr-2 text-white hover:scale-105"
                >
                  Details
                </Link>

                {/* <span className="text-white ml-1 hover:scale-105"> <a href={project.liveLink}> Live </a> </span> */}
              </div>
             
            </div>
    );
};

export default College;