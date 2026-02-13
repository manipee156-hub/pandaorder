import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import OrdersList from "./components/OrdersList";
import OrderForm from "./components/OrderForm";
import PublicOrderForm from "./pages/PublicOrderForm";
import Dashboard from "./pages/Dashboard";
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
      <Routes>

        {/* صفحة عامة للزبائن، لا تحتاج تسجيل دخول */}
        <Route path="/order/:public_id" element={<PublicOrderForm />} />
        <Route path="/*" element={<Dashboard />} />
        {/* صفحة رئيسية للتاجر */}
        <Route path="/" element={
          <div>
            <h1>My SaaS 🚀</h1>

            {!user ? (
              <>
                <RegisterForm />
                <hr />
                <LoginForm onLogin={(u) => setUser(u)} />
              </>
            ) : (
              <>
                <h2>Welcome, User!</h2>
                <button onClick={handleLogout}>Logout</button>
                <hr />
                <OrderForm onOrderCreated={() => {}} />
                <OrdersList />
              </>
            )}
          </div>
        }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;