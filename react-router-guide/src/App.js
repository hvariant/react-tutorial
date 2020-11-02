import React from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

export default function App() {
  const name = "John";
  const isAuthenticated = false;
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          {
            isAuthenticated ?
            <>
            <Switch>
              <Route path="/about/:name" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route render={() => <h1>page not found</h1>}/>
            </Switch>
            </> :
            <Redirect to="/" />
          }
        </Switch>
      </main>
    </Router>
  );
}

// Home Page
const Home = () => (
  <>
    <h1>Home</h1>
    <FakeText />
  </>
);
// About Page
// Redirect replaces the current page instead of pushing to history
const About = ({match:{params:{name}}}) => (
  <>
    { name !== 'John' ? <Redirect to='/' /> : null }
    <h1>About {name}</h1>
    <FakeText />
  </>
);
// Contact Page
const Contact = ({history}) => (
  <>
    <h1>Contact</h1>
    <button onClick={() => history.push('/')}>Go home</button>
    <FakeText />
  </>
);

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);
