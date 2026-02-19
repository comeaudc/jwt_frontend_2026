import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/Index";
import Dashboard from "./pages/dashboard/Index";
import Navbar from "./components/navbar/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <h2>My App</h2>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// React router dom - allows us to navigate to other components as if they were pages. through the URL
//  Each route is a different page
