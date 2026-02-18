import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import OrdersList from "./components/OrdersList";
import OrderForm from "./components/OrderForm";
import PublicOrderForm from "./pages/PublicOrderForm";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import LandingHero from "./components/LandingHero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";


function App() {
  const [user, setUser] = useState(null);

  // عند تحميل الصفحة، نتأكد إذا كان هناك token
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");

    if (token && userId) {
      setUser({ id: userId });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية (Landing Page) */}
        <Route
          path="/"
          element={
            <>
              <LandingHero />
              <Features />
              <HowItWorks />
              <CTA />
            </>
          }
        />

        {/* Privacy */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Terms */}
        <Route path="/terms" element={<TermsOfService />} />

        {/* صفحة عامة للزبائن */}
        <Route path="/order/:public_id" element={<PublicOrderForm />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            !user ? (
              <>
                <RegisterForm />
                <hr />
                <LoginForm onLogin={(u) => setUser(u)} />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold p-4">Welcome, User!</h2>
                <button
                  onClick={handleLogout}
                  className="ml-4 mb-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Logout
                </button>
                <OrderForm onOrderCreated={() => {}} />
                <OrdersList />
              </>
            )
          }
        />

        {/* أي مسار غير معروف */}
        <Route path="*" element={<Dashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;