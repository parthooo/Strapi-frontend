import React from 'react';
import { Blogs, Navbar } from '../components';

const Article = () => {
    return (
        <>
            <Navbar />
            <div className='flex items-center mt-10'>
                <div className="max-w-[1240px] mx-auto">
                    <Blogs />
                </div>
            </div>
        </>
    )
};

export default Article;

