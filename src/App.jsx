import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TicketDataProvider } from "./context/TicketDataContext";
import PublicRoute from "./assets/components/PublicRoute";
import ProtectedRoute from "./assets/components/ProtectedRoute";
//import useHotjar from "./hooks/useHotjar";
import "./styles/Fonts.css";
import "./styles/Input.css";
import "./styles/App.css"
import "./styles/HomePage.css"
import "./styles/Backgrounds.css"
import "./styles/Texts.css"
import "./styles/Image.css"
import "./styles/Validated.css"

import React, { Suspense } from "react";
import GridLoader from "react-spinners/GridLoader"; // Importa el spinner

// Implementación de lazy loading
const HomePage = React.lazy(() => import("./pages/HomePage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));
const RegisterPage = React.lazy(() => import("./pages/RegisterForm"));
const LogInPage = React.lazy(() => import("./pages/LogIn"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const SelectTicketType = React.lazy(() => import("./pages/SelectTicketType"));
const PhysicalTicket = React.lazy(() => import("./pages/PhysicalTicket"));
const OnlineTicket = React.lazy(() => import("./pages/OnlineTicket"));
const TripInfo = React.lazy(() => import("./pages/TripInfo"));
const TripCalculateTotal = React.lazy(() => import("./pages/TripCalculateTotal"));
const SpecialKitInfo = React.lazy(() => import("./pages/SpecialKitInfo"));
const SpecialKitCalculateTotal = React.lazy(() => import("./pages/SpecialKitCalculateTotal"));
const LegalBases = React.lazy(() => import("./pages/LegalBases"));
const VerifyAccount = React.lazy(() => import("./pages/VerifyAccount"));
const PrivacyNotice = React.lazy(() => import("./pages/PrivacyNotice"));

const App = () => {
  return (
    <AuthProvider>
      <TicketDataProvider>
        <Router>
          <Suspense 
          fallback={
            <div className="spinner-container">
              <GridLoader size={30} color={"red"}/>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/legal-bases" element={<LegalBases />} />
              <Route path="/privacy-notice" element={<PrivacyNotice />} />
              <Route path="/verify-account" element={<VerifyAccount />} />
              <Route path="*" element={<NotFoundPage />} />
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
            </Routes>
          </Suspense>
        </Router>
      </TicketDataProvider>
    </AuthProvider>
  );
};

export default App;
