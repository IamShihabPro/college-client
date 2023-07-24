import React, { useContext } from 'react';
import Colleges from '../Colleges/Colleges';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../../Components/Loader/Loader';

const Home = () => {
    const { loading} = useContext(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <Colleges></Colleges>   
        </div>
    );
};

export default Home;