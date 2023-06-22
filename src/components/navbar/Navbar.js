import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const providersNames = [
  'auth0',
];

const LoginButton = (props) => <a href={`${backendUrl}/api/connect/${props.providerName}`}>
  <button> Login with {props.providerName}</button>
</a>;

const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>;

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear()
    setIsLogged(false);
  };

  let buttons;

  if (isLogged) {
    buttons = <LogoutButton onClick={logout} />;
  } else {
    buttons = <ul style={{ listStyleType: 'none' }}>
      {providersNames.map((providerName, i) => <li key={providerName}>
        <LoginButton providerName={providerName} />
      </li>)}
    </ul>;
  }

  let text;

  if (isLogged) {
    text = `Welcome ${localStorage.getItem('username')}, you are connected! `;
  } else {
    text = 'You are not connected. Please log in.';
  }
  return (
    <div className='w-full h-[80px] z-10 bg-white drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]"/>
            </div>
            <div className='hidden md:flex sm:mr-10 md:mr-10'>
                <button className='border-none bg-transparent text-black mr-4'>Blog</button>
                <button className=''>{buttons}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar