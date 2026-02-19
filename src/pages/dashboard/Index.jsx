import { useAuth } from "../../context/authContext/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/auth");
  }

  return (
    <div>
      <h1>Only Users Should See This Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
