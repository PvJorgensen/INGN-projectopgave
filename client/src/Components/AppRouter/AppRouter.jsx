import { Route, Routes } from 'react-router-dom';
import { Login } from '../../Pages/Login';
import { LandingPage } from '../../Pages/LandingPage';


export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />


    </Routes>
  );
};
