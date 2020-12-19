import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Welcome to the Silicon Cave">
        <p>
          Please take a look on <a href="https://www.macrumors.com/guide/apple-silicon/">Apple</a>, <a href="https://www.amd.com/en/products/processors-desktop">AMD</a> and <a href="https://www.intel.com/content/www/us/en/products/processors/core.html">Intel</a> and we will really appreciate if you could leave your oppinion about processor that youare currently using or would like to use in the future.
        </p>

      </Header>

      <Container>
        <hr/>

        <p></p>
      </Container>
    </>
  );
}
 
export default Home;