import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/index.d';
import { Navbar } from '../../components/index.d';


export const ShopManagementRoutes = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="inicio" element={< MainPage />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
}

