import { useState, useEffect } from "react";
import api from "../services/api";
import OrderForm from "./OrderForm";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewOrder = (order) => {
    setOrders([order, ...orders]);
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>My Orders</h2>
      <OrderForm onOrderCreated={handleNewOrder} />
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>{order.customer_name}</strong> - {order.product} - {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}