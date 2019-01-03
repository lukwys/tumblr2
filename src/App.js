import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Home } from './components/Home';
import { PostList } from './components/PostList';
import { Post } from './components/Post';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/Posts'>Post list</Link>
              </li>
            </ul>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={PostList} />
          <Route path='/post/:id' component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
