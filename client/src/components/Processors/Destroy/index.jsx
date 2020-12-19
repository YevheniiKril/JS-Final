import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/processors/destroy`, { _id: id })
    .then(() => {
      setNotification(`Your review was succesfully deleted.`);
    })
    .catch(error => {
      setNotification(`Couldn't delete the selected review due to an error: ${error.message}`);
    });
  }, [globalStore, id, setNotification]);

  return <Redirect to="/processors"/>;
}
 
export default Destroy;