import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactNode;
}
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to='/' replace /> : children;
};

export default PublicRoute;
