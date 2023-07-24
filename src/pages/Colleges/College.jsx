import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const College = ({college}) => {
    const {name, image, admissionProcess, events, researchWorks, sportsCategories, ratings, _id} = college
    return (
        <div className="pb-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {name}
              </h3>

              <h2 className='text-white'>{ratings}</h2>
              <Rating style={{ maxWidth: 70 }} value={ratings} readOnly />

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