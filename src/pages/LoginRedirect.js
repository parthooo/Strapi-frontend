import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";
import Loader from '../components/Loader';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const LoginRedirect = (props) => {
  const [text, setText] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    setLoading(true);
    fetch(`${backendUrl}/api/auth/${params.providerName}/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => history.push('/blogs'), 1000);
        setLoading(true); // Redirect to homepage after 3 sec
      })
      .catch(err => {
        setText('An error occurred, please see the developer console.')
        setLoading(true);
      });
  }, [history, location.search, params.providerName]);

  return <>
    <div>
      {loading ? (
        <Loader /> // Replace Loader with your loader component
      ) : (
        // Render the content when data is not loading
        <p>{text}</p>
      )}
    </div>
  </>
};

export default LoginRedirect;
