import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = ({children:R eact.ReactNode}) => {
    const { user } = useContext(AuthContext);'
    
    if (!user) {
        return <Navigate to ="/home" replace />;
    }
    return children;      
    }
 

  export default PrivateRoutes;