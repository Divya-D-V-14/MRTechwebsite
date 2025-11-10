import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./OrderTracking.css";

const OrderTracking = () => {
  const location = useLocation();
  const receivedOrderId = location.state?.orderId || "";
  const [orderId, setOrderId] = useState(receivedOrderId);
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState("");

  // Dummy order data (mock)
  const dummyOrder = {
    id: receivedOrderId || "548231",
    customerName: "Divya D V",
    date: "Oct 30, 2025",
    totalAmount: 3250,
    paymentMethod: "Cash on Delivery",
    status: "Shipped",
    items: [
      { name: "Test Tube Stand", quantity: 2, price: 850 },
      { name: "Tourniquet", quantity: 1, price: 450 },
    ],
    address: {
      line1: "12, Main Street",
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641001",
    },
    estimatedDelivery: "Nov 2–4, 2025",
  };

  // 🧠 Auto-load if orderId received
  useEffect(() => {
    if (receivedOrderId) {
      handleTrack();
    }
  }, [receivedOrderId]);

  const handleTrack = () => {
    if (orderId === dummyOrder.id || receivedOrderId) {
      setOrderData(dummyOrder);
      setError("");
    } else {
      setError("⚠️ Order not found. Please check your Order ID.");
      setOrderData(null);
    }
  };

  const stages = ["Pending", "Confirmed", "Shipped", "Out for Delivery", "Delivered"];
  const currentStageIndex = orderData ? stages.indexOf(orderData.status) : -1;

  return (
    <div className="tracking-page">
      <div className="tracking-card">
        <h1>📦 Order Tracking</h1>
        <p className="subtitle">Track your order status and delivery updates.</p>

        {/* 🔍 Search Box */}
        <div className="tracking-form">
          <input
            type="text"
            placeholder="Enter your Order ID (e.g. 548231)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button onClick={handleTrack}>Track Order</button>
        </div>

        {error && <p className="error-text">{error}</p>}

        {/* 📄 Order Details */}
        {orderData && (
          <div className="order-details">
            <h2>Order #{orderData.id}</h2>
            <p><strong>Date:</strong> {orderData.date}</p>
            <p><strong>Name:</strong> {orderData.customerName}</p>
            <p><strong>Payment:</strong> {orderData.paymentMethod}</p>
            <p><strong>Total:</strong> ₹{orderData.totalAmount}</p>

            {/* 🚀 Progress */}
            <div className="tracking-progress">
              {stages.map((stage, index) => (
                <div
                  key={stage}
                  className={`stage ${index <= currentStageIndex ? "active" : ""}`}
                >
                  <div className="dot"></div>
                  <p>{stage}</p>
                </div>
              ))}
            </div>

            {/* 📍 Address */}
            <div className="address-box">
              <h3>Delivery Address</h3>
              <p>{orderData.address.line1}</p>
              <p>
                {orderData.address.city}, {orderData.address.state} -{" "}
                {orderData.address.pincode}
              </p>
              <p><strong>Est. Delivery:</strong> {orderData.estimatedDelivery}</p>
            </div>

            {/* 🛍️ Items Ordered */}
            <div className="items-box">
              <h3>Items Ordered</h3>
              <ul>
                {orderData.items.map((item, idx) => (
                  <li key={idx}>
                    <span>{item.name}</span>
                    <span>
                      ₹{item.price} × {item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;