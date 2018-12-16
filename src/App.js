import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Home } from './components/Home';
import { PostList } from './components/PostList';
import { Post } from './components/Post';

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
              <li>
                <Link to='/Post'>Post</Link>
              </li>
            </ul>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/Posts' component={PostList} />
          <Route path='/Post/:id' component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
