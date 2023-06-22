import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Article from "./pages/Article";
import './index.css';
import { Footer, Navbar } from "./components";
import BlogContentPage from "./pages/BlogContentPage";
import useFetch from "./hooks/useFetch";
import LoginRedirect from "./pages/LoginRedirect";

const App = () => {
  let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  if (!process.env.REACT_APP_BACKEND_URL) {
    return <p>
      Please specify your backend url with the <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/" target="_blank" rel="noopener noreferrer">environment variable</a>:<br />
      <b>REACT_APP_BACKEND_URL</b>.<br />
      <br />
      For example launch this app with:<br />
      <b>REACT_APP_BACKEND_URL=http://localhost:1337 yarn start</b>
    </p>;
  }


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/connect/:providerName/redirect" component={LoginRedirect} />
          <Route exact path="/" component={Home} />
          <Route exact path="/article" component={Article} element={<Article blogs={data} />} />
          <Route exact path="/blog/:id" component={BlogContentPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
