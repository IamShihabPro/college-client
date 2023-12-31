import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Nabvbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut} = useContext(AuthContext)


  const navItems = [
    {
        id: 1,
        link: '/',
        title: 'Home'
    },
    {
        id: 2,
        link: '/admission',
        title: 'Admission'
    },
    {
        id: 3,
        link: '/mycollege',
        title: 'My College'
    },
]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err) )
  }

  return (
    <nav className="bg-gray-900 fixed top-0 inset-x-0 z-50">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className=''>
                    <h1 className='text-white font-bold text-2xl'>College</h1>
                </div>

                <div className='hidden md:block lg:block'>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navItems.map(({id, link, title})=> (
                                <a  key={id} href="" className="text-white hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                                <Link to={link} >{title}</Link>
                                </a>
                            ))
                        }

                        {
                            user ? <> 
                            <Link to='/addcollege' className="text-red-500 hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ">Add College</Link>       
                            <Link  onClick={handleLogOut} className="text-red-500 hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ">Logout</Link>       
                             </> : <> <Link to='/login' className="text-red-500 hover:text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium "> Login </Link> </>

                             
                        }
                    </div>
                </div>

                <div className='-mr-2 flex md:hidden'>
                    <button onClick={toggleNavbar} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out' aria-label="Toggle navigation">
                    {
                        isOpen ? (
                        <FaTimes className="h-6 w-6" />) : 
                        (<FaBars className="h-6 w-6" /> )
                    }
                    </button>

                </div>

            </div>


            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div>
                    {
                        navItems.map(({id, link, title})=>(
                            <a key={id} href="" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                            <Link to={link} >{title}</Link>
                            </a>
                        ))
                    }
                </div>

            </div>

        </div>
    </nav>
  );
};

export default Nabvbar;