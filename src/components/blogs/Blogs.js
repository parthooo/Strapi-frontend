import React from 'react'
import { Link } from "react-router-dom";

const Blogs = () => {
  
  const blogs=[
    {
        "id":1,
        'title':'Blog 1',
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content':'We are currently encountering an issue with the IMR code, specifically with the newly amended or created pages that are not displaying the IMR codes since this morning. To address this problem, I have identified a relevant JIRA ticket, AHVZ-2458, and shared a detailed comment explaining the issue. Our hopes rest on the expertise and assistance of Ohoa and Alain, who we believe can help us resolve this matter. We understand the significance of the IMR code and its impact on our system, and we are committed to working together to rectify this situation promptly.👋',
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'

    },
    {
        "id":2,
        'title':'Blog 2',
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content':'The IMR code malfunction is causing understandable concern within our team. Pages that have been recently updated or created are inexplicably not showing the expected IMR codes. This unexpected issue has the potential to disrupt our operations and compromise the accuracy of our work. We have taken immediate action by submitting a comment on the relevant JIRA ticket, AHVZ-2458, and seeking assistance from Ohoa and Alain. Their expertise and collaboration are crucial to quickly resolving this issue and restoring the proper functionality of the IMR code across all affected pages.',
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'
    },
    {
        "id":3,
        'title':'Blog 3',
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content':'As we confront this IMR code challenge, it is important that we remain proactive and maintain effective communication channels. Staying updated on any progress or updates related to the issue will be key. Additionally, fostering a collaborative environment within our team will enable us to share insights and potential solutions. With the support and expertise of Ohoa and Alain, we are confident in our ability to address this problem swiftly. We are committed to resolving this matter to ensure the accurate display of IMR codes on all relevant pages, minimizing any disruptions to our workflow..👋',
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'
    },
]

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px] p-10'>
      <div className="max-w-[1240px] mx-auto">
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
      {
      blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id}>
          <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
            <img className='h-56 w-full object-cover' src={blog.coverImg} alt='logo'/>
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
              <p className='text-gray-600 text-xl'>{blog.desc}</p>
            </div>
          </div>
        </Link>
        )
        )
      }


        </div>
      </div>
    </div>
  )
}

export default Blogs