import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import College from './College';

const Colleges = () => {

    const [colleges, setColleges] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/colleges`)
        .then(res => res.json())
        .then(data => {
            setColleges(data);
        })
    },[colleges])

    // fetch(`${import.meta.env.VITE_API_URL}/colleges`)
    // .then(res => res.json())
    // .then(data => {
    //     setColleges(data);
    // })

    console.log(colleges);

    return (
        <section  className="py-24 bg-gray-950 text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-white"> Colleges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            colleges?.map(college => <College key={college._id} college={college} ></College> )
                        }
                    </div>
                </div>
        </section>
    );
};

export default Colleges;