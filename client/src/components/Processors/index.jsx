import React, { useContext, useState, useEffect } from 'react';
import { GlobalStoreContext } from '../shared/Globals';
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { UserContext } from '../Authentication/UserProvider';
import { NotificationContext } from '../shared/Notifications';
import Axios from 'axios';

const Processors = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { user } = useContext(UserContext);
  
    const [processors, setProcessors] = useState([]);
    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/processors`)
        .then(({ data }) => {
          setProcessors(data);
        })
        .catch(error => {
          setNotification({
            type: "danger",
            message: `There was an error retrieving the review: ${error.message}`
          });
        });
      }, [globalStore, setNotification]);
    
      return (
        <>
          <Header title="Pocessors"/>
    
          <Container>
            {processors && processors.length > 0 ? (
                
                <Table striped bordered hover>
            <thead>
              <th>Processor</th>
              <th>Author</th>
              <th>Model</th>
              <th>Review</th>
            </thead>

            <tbody>
              {processors.map((processor, i) => ( 
                <tr key={i}>
                  <td>
                    {processor.processor}
                  </td>
                  
                  <td>
                    {processor.author}
                  </td>

                  <td>
                    {processor.model}
                  </td>
                  
                  <td>
                    {processor.review}
                  </td>


              <td>
                  {user && user.token ? (
                    <Link to={`/processors/edit/${processor._id}`}>Edit</Link>
                  ) : null}
            </td>
            <td>
            {user && user.token ? (
                    <Link to={`/processors/destroy/${processor._id}`}>Delete</Link>
                    ) : null}
            </td>
                  
                  </tr>
                
              ))}

              
              </tbody>
              </Table>
            ) : null}
          </Container>
        </>
      );
    }
     
    export default Processors;
  