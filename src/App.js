import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { Home } from './components/Home';
import { PostList } from './components/PostList';
import { Post } from './components/Post';
import { Provider } from 'mobx-react';
import { Store } from './Store';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  componentWillMount() {
    this.postStore = new Store();
  }

  render() {
    return (
      <Provider postStore = {this.postStore}>
        <BrowserRouter>
          <div className='app'>
            <Nav className='app__nav'>
              <NavItem>
                <Link to="/" className='app__nav-link'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/Posts' className='app__nav-link'>Post list</Link>
              </NavItem>
            </Nav>
            <Route exact path='/' component={Home} />
            <Route path='/posts' component={PostList} />
            <Route path='/post/:id' component={Post} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
