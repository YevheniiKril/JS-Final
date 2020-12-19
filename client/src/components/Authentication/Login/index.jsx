import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Login">
        <p>
          Please login to the website to be adble to see and edit reviews.
        </p>
        
      </Header>
      
      <Container>

        
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;