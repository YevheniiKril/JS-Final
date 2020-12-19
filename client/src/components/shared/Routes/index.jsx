import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import CpuRoutes from '../../Processors/routes';

const Routes = () => {
  return (
    <>
      <CpuRoutes/>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;