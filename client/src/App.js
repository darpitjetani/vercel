import { Routes, Route } from "react-router-dom";
import AdminRoute from "./components/Routes/AdminRoute";
import PrivateRoute from "./components/Routes/Private";
import About from "./pages/About";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/user/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
        </Route>
        <Route path="/dashboard/user" element={<Dashboard />} />

        <Route path="/dashboard" element={<AdminRoute />}>
        </Route> 
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

        <Route path="/register" element={<Register />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App; 