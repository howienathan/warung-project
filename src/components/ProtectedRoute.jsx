import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { getUserData } from '../utils/auth';

const ProtectedRoute = ({ children, requiredRole }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser ;
      if (user) {
        const result = await getUserData(user.uid);
        if (result.success) {
          setUserRole(result.data.role);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userRole !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;