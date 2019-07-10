import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import {Route, Link} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/landing/Navbar';
import Landing from './components/landing/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Blog from './components/resources/Blog';
import BlogPost from './components/resources/BlogPost';
import Support from './components/support/Support';
import Alert from './components/Alert';
//import Register from './components/auth/Register';

//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavigationBar />

        <Route exact path="/" component={Landing} />

        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/support" component={Support}/>
          //butterCMS routes
          <Route path="/blog" component={Blog}/>
          <Route path='/blog/:page' exact component={Blog} />
          <Route path='/blog/posts/:post' component={BlogPost} />

        </Switch>
      </Fragment>
    </Router>
  </Provider>

);


export default App;
