import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PublicRoute from "./assets/components/PublicRoute";
import ProtectedRoute from "./assets/components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import RegisterPage from "./pages/RegisterForm";
import LogInPage from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import SelectTicketType from "./pages/SelectTicketType";
import PhysicalTicket from "./pages/PhysicalTicket";
import OnlineTicket from "./pages/OnlineTicket";
import TripInfo from "./pages/TripInfo";
import TripCalculateTotal from "./pages/TripCalculateTotal";
import SpecialKitInfo from "./pages/SpecialKitInfo";
import SpecialKitCalculateTotal from "./pages/SpecialKitCalculateTotal";
import './styles/Fonts.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/user/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/user/login"
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/ticket/select-type"
            element={
              <ProtectedRoute>
                <SelectTicketType />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/ticket/physical"
            element={
              <ProtectedRoute>
                <PhysicalTicket />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/ticket/online"
            element={
              <ProtectedRoute>
                <OnlineTicket />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/ticket/trip"
            element={
              <ProtectedRoute>
                <TripInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/ticket/trip/calculate-total"
            element={
              <ProtectedRoute>
                <TripCalculateTotal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/ticket/kit/info"
            element={
              <ProtectedRoute>
                <SpecialKitInfo />
              </ProtectedRoute>
            }
          />
           <Route
            path="/user/ticket/kit/calculate-total"
            element={
              <ProtectedRoute>
                <SpecialKitCalculateTotal />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
