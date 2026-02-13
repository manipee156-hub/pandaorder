import React from "react";
import axios from "axios";

function Pricing() {

  const handleFreeSignup = () => {
    window.location.href = "/signup";
  };

  const handleMonthlySubscribe = async () => {
    try {
      const token = localStorage.getItem("access_token");

      if (!token) {
        alert("Please login first");
        window.location.href = "/login";
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/payment/lemonsqueezy",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { url } = res.data;

      // تحويل المستخدم لصفحة الدفع
      window.location.href = url;

    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pricing-page">
      <h1>Choose Your Plan</h1>
      <div className="plans">

        <div className="plan free">
          <h2>Free Trial</h2>
          <p>5 days access</p>
          <button onClick={handleFreeSignup}>
            Sign Up Free
          </button>
        </div>

        <div className="plan monthly">
          <h2>Monthly</h2>
          <p>$11 / month</p>
          <button onClick={handleMonthlySubscribe}>
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
}

export default Pricing;