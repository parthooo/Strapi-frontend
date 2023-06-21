import React from 'react'

const Blogs = () => {

  const blogs=[
    {
        "id":1,
        'title':'Blog 1',
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet.👋',
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'

    },
    {
        "id":2,
        'title':'Blog 2',
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others.',
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'
    },
    {
        "id":3,
        'title':'Blog 3',
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing.👋',
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

          <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
            <img className='h-56 w-full object-cover' src={blog.coverImg} alt='logo'/>
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
              <p className='text-gray-600 text-xl'>{blog.content}</p>
            </div>
          </div>
        )
        )
      }


        </div>
      </div>
    </div>
  )
}

export default Blogs