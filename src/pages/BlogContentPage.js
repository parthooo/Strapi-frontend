import React from 'react';
import BlogContent from '../components/blogContent/BlogContent';
import { Navbar } from '../components';

const BlogContentPage = () => {
    return (
        <div>
            <Navbar />
            <BlogContent />
        </div>
    );
};

export default BlogContentPage;