import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, watch, reset ,formState: { errors } } = useForm();
    const { createUser} = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);      
        })
    };

    // console.log(watch("example"));

    return (
        <div className='py-28'>
        <h2
          className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800"
          
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-gray-800 p-6 drop-shadow-xl">
            <div className="mb-4">
                {/* <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
                </label> */}
                <input
                className="appearance-none bg-gray-50 rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
                {...register("name", { required: true })}
                
                />
                {errors.name && <span className='text-sky-500'>Name is Required</span>}
            </div>
            <div className="mb-4">
              
                <input
                className="appearance-none bg-gray-50 rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                {...register("email", { required: true })}
                />
                {errors.email && <span className='text-sky-500'>Email is Required</span>}
            </div>

            <div className="mb-4">
               
                <input
                className="appearance-none bg-gray-50 rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Your Password"
                name="password"
                {...register("password", {required: true, minLength: 8 })}               
                />
                {errors.password?.type === 'required' && <p className='text-sky-500'>Password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-sky-500'>Password must be 8 character</p>}
            </div>

            <div className="flex justify-center">
                <button
                className="bg-red-600 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Sign Up
                </button>
            </div>

            <div className='mt-3 flex justify-center items-center'>
                <h1 className='me-4 text-white'>Already have an account? <span className='text-red-500'> <Link to='/login'>Login</Link> </span> </h1>
            </div>
            
        </form>
   </div>
    );
};

export default SignUp;