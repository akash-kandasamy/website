import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
            <h2 className='title'>Devi's Kitchen</h2>
            <div className='space'></div>
            <nav>
              <ul className="list">
                <li className="listItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="listItem">
                  <Link to="/about">About</Link>
                </li>
                <li className="listItem">
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
        </div>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}