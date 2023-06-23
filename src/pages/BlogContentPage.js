import React from 'react';
import BlogContent from '../components/blogContent/BlogContent';
import { Navbar } from '../components';
import useFetch from "../hooks/useFetch";

const BlogContentPage = () => {
    let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <>
            <Navbar />
            <BlogContent blogsContentProps={data?data:""}/>
        </>
    );
};

export default BlogContentPage;