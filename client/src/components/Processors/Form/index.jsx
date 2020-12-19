import { Redirect } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';

const CpuForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
        ...inputs,
        secret_token: (user && user.token)
      })
      .then(({ data }) => {
        if (data) {
          setNotification({
            type: "success",
            message: "Your review was updated successfully"
          });
        }
  
        setRedirect(true);
      })
      .catch((error) => {
        setNotification({
          type: "danger",
          message: `There was an error updating your review: ${error.message}`
        });
      });
    };

    if (redirect) return <Redirect to="/processors"/>;
  return (
    <Form onSubmit={handleSubmit}>
     <Form.Label>Processor</Form.Label>
     <Form.Group>
        <Form.Control 
        onChange={handleChange} 
        name="processor"
        placeholder="Fill in the name of your favourite processor"
        defaultValue={inputs.processor}
      />
      </Form.Group>

      <Form.Group>
        <Form.Label>Model</Form.Label>

        <Form.Control 
        onChange={handleChange} 
        name="model" 
        placeholder="Model of processor"
        defaultValue={inputs.model}
      />
      </Form.Group>
   
      <Form.Group>
        <Form.Label>Genre</Form.Label>

        <Form.Control 
        onChange={handleChange} 
        name="review" 
        placeholder="Your opinion about this processor"
        defaultValue={inputs.review}
        />
        </Form.Group>
       <Form.Group>
      <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
 
export default CpuForm;
