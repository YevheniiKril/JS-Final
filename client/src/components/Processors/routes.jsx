import { UserContext } from '../Authentication/UserProvider'; 
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';

const Routes = () => {
    const { user } = useContext(UserContext);
  
    return (
      <Switch>
        <Route exact path="/processors" component={Index}/>
  
        {user && user.token ? (
          <>
            <Route exact path="/processors/new" component={New}/>
            <Route exact path="/processors/edit/:id" component={Edit}/>
            <Route exact path="/processors/destroy/:id" component={Destroy}/>
          </>
        ) : null}
      </Switch>
    );
  }
   
  export default Routes;