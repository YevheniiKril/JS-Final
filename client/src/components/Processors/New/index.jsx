import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Review">
      </Header>

      <Container className="my-3">
        <Form endpoint="processors"/>
      </Container>
    </>
  );
}
 
export default New;