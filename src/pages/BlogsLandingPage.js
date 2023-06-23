import React from 'react';
import { Blogs, Navbar } from '../components';
import useFetch from "../hooks/useFetch";

const BlogsLandingPage = (blogs) => {

    let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <>
            <Navbar />
            <div className='flex items-center'>
                <div className="max-w-[1240px] mx-auto">
                    <Blogs blogsProps={data?data:""}/>
                </div>
            </div>
        </>
    )
};

export default BlogsLandingPage;

