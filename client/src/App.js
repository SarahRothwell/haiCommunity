import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import {Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
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
        <Navbar />
        <Alert/>
        <Route exact path="/" component={Landing} />

        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/support" component={Support}/>
          //butterCMS routes
          <Route exact path="/blog" component={Blog}/>
          <Route path='/blog/:page' exact component={Blog} />
          <Route path='/blog/posts/:post' component={BlogPost} />

        </Switch>
      </Fragment>
    </Router>
  </Provider>

);


export default App;
