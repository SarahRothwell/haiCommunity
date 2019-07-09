import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //connect the component to redux
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register}) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const {username, email, password, passwordConfirmation} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if(password !== passwordConfirmation){
      setAlert('passwords do not match', 'danger');
    } else {
      register({ username, email, password });
    }
  }

  return (
    <Fragment>
      <h2>Create an account</h2>
      <form className="register-form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type='email'
            placeholder='Email address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type='password'
            placeholder='Confirm password'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p> Already have an account? <Link to='/login'>Sign In</Link></p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default connect(null, {setAlert, register})(Register);
