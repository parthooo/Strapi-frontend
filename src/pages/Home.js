import React, { useState } from 'react';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const providersNames = [
  'auth0',
];

const LoginButton = (props) => <a href={`${backendUrl}/api/connect/${props.providerName}`}>
  <button className="text-3xl font-bold underline
    ">Connect to {props.providerName}</button>
</a>;

const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>;

const Home = (props) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
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
    <div className='flex items-center mt-10'>
      <div className="max-w-[1240px] mx-auto">
        <p>{text}</p>
        {buttons}
      </div>
    </div>
  )
}

export default Home;
