import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="Registration">
        <p>
          Please register and login to see reviews and be able to edit them.
        </p>
      </Header>
      
      <Container>

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;