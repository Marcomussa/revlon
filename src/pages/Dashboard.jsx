import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;
