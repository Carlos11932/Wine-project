import { Route, Routes } from 'react-router-dom';

import { ShopManagementRoutes } from '../shopManagement/routes/ShopManagementRoutes';



export const AppRouter = () => {
  return (
    <>

        <Routes>
            <Route path="/*" element={ <ShopManagementRoutes /> } />
        </Routes>
    
    </>
  )
}
