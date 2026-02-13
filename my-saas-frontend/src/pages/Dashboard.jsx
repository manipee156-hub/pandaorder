// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import api from "../services/api";
import OrderForm from "../components/OrderForm";
import OrdersList from "../components/OrdersList";

export default function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/me"); // Endpoint من STEP 6
        setUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p> المستخدم غير موجود</p>;

  return (
    <div>
      <h2>مرحباً، {user.email}!</h2>
      <button onClick={onLogout}>Logout</button>

      <hr />
      <p>
        رابط الطلب الخاص بك:
        <br />
        <b>http://localhost:3000/order/{user.public_id}</b>
      </p>

      <hr />
      <OrderForm onOrderCreated={() => {}} />
      <OrdersList />
    </div>
  );
}
