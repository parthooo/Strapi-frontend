import React from 'react';
import { LuLoader2 } from 'react-icons/lu';
import Navbar from './navbar/Navbar';
// import Loader from './../assets/loader.gif';

const Loader = () => {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <div className="flex justify-items-center max-w-[1240px] items-center h-[80vh] mx-auto">
                    <h1 className='text-3xl'><LuLoader2 /></h1>
                </div>
            </div>
        </>
    );
};

export default Loader;