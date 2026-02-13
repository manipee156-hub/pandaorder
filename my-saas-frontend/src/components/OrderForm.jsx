import { useState } from "react";
import api from "../services/api";

export default function OrderForm({ onOrderCreated }) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const res = await api.post("/orders/create", {
        
        customer_name: customerName,
        phone,
        address,
        product
      });

      setMessage(res.data.message);
      // مسح الحقول بعد الإرسال
      setCustomerName("");
      setPhone("");
      setAddress("");
      setProduct("");

      // إبلاغ الـ parent component لتحديث قائمة الطلبات
      if (onOrderCreated) onOrderCreated(res.data.order);
    } catch (err) {
      setMessage(err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Order</button>
      </form>
      <p>{message}</p>
    </div>
  );
}