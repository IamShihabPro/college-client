import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { app } from '../../firebase/firebase.config';
import { getAuth, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {signIn, googleProvider} = useContext(AuthContext)
    const auth = getAuth(app)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success('Successfully Login');
            navigate(from, {replace: true})
        })
        .catch(err =>{
            console.log(err);
        })
    };



    const  handleGoggleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(res =>{
            const user = res.user
            console.log(user);
            navigate(from, {replace: true} )
        })
        .catch(err =>{
            console.log('error', err.message);
        })
    }



    // console.log(watch("example"));

    return (
        <div className='py-28'>
        <h2
          className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800"
          
        >
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-gray-800 p-6 drop-shadow-xl">
           
            <div className="mb-4">
              
                <input
                className="appearance-none bg-gray-50 rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                {...register("email")}
                />
            </div>

            <div className="mb-4">
               
                <input
                className="appearance-none bg-gray-50 rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Your Password"
                name="password"
                {...register("password")}               
                />
                
            </div>

            <div className="flex justify-center">
                <button
                className="bg-red-600 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Login
                <Toaster position="bottom-center" reverseOrder={true} />
                </button>
            </div>

            <div className='mt-3 flex justify-center items-center'>
                <h1 className='me-4 text-white'>Don't have an account? <span className='text-red-500'> <Link to='/signup'>Sign Up</Link> </span> </h1>
            </div>


            <div className='mt-4 flex justify-center items-center'>
                <button onClick={handleGoggleSignIn}  > <img src='https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1690216771~exp=1690217371~hmac=cea4ebc79873d3e18f482a1ad81c8a09e52dbe0cb3b55016109cfa14596fa61d' className='w-10 cursor-pointer' alt="" /></button>
            </div>

        </form>
        </div>
    );
};

export default Login;