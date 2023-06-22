import React from 'react';
import Navbar from '../components/navbar/Navbar';


const Home = (props) => {


  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className="flex justify-items-center max-w-[1240px] items-center h-[80vh] mx-auto">
          <h1 className='text-3xl'>To view the blogs please login with your Auth0 credentials</h1>
        </div>
      </div>
    </>
  )
}

export default Home;
