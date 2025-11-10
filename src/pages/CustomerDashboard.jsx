
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerDashboard.css";

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // ✅ Get user data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!data || data.userType !== "customer" || !isLoggedIn) {
      navigate("/login");
    } else {
      setUserData(data);
    }
  }, [navigate]);

  // ✅ Fetch user's orders
  useEffect(() => {
    if (userData && userData.email) {
      fetchOrders();
    }
  }, [userData]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/orders/customer/${userData.email}`);
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!userData) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "18px",
        color: "#666",
      }}>
        Loading...
      </div>
    );
  }

  const totalSpent = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
  const activeOrders = orders.filter((o) => o.orderStatus !== "delivered").length;

  const statusColors = {
    pending: "status-pending",
    processing: "status-processing",
    confirmed: "status-processing",
    shipped: "status-shipped",
    delivered: "status-delivered",
  };

  return (
    <div className="customer-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Welcome, {userData.fullName}! 👋</h1>
            <p>Manage your orders and track deliveries</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card card-blue">
          <div className="stat-icon">📦</div>
          <div className="stat-details">
            <h3>Total Orders</h3>
            <p className="stat-number">{orders.length}</p>
            <span className="stat-change">All time</span>
          </div>
        </div>

        <div className="stat-card card-yellow">
          <div className="stat-icon">🚚</div>
          <div className="stat-details">
            <h3>Active Orders</h3>
            <p className="stat-number">{activeOrders}</p>
            <span className="stat-change">In progress</span>
          </div>
        </div>

        <div className="stat-card card-green">
          <div className="stat-icon">💰</div>
          <div className="stat-details">
            <h3>Total Spent</h3>
            <p className="stat-number">₹{totalSpent.toLocaleString()}</p>
            <span className="stat-change">All time</span>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-btn" onClick={() => navigate("/purchase")}>
            🛍️ Browse Products
          </button>
          <button className="action-btn" onClick={() => navigate("/track-order")}>
            📍 Track Order
          </button>
          <button className="action-btn" onClick={() => navigate("/contact")}>
            💬 Contact Support
          </button>
        </div>
      </div>

      <div className="orders-section">
        <div className="section-header">
          <h2>Your Orders</h2>
          <button className="refresh-btn" onClick={fetchOrders}>🔄 Refresh</button>
        </div>

        {loading ? (
          <div className="loading-state">
            <p>Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📦</span>
            <h3>No orders yet</h3>
            <p>Start shopping to see your orders here</p>
            <button className="shop-now-btn" onClick={() => navigate("/purchase")}>
              🛍️ Shop Now
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.orderId} className="order-card">
                <div className="order-card-header">
                  <div className="order-id">
                    <strong>{order.orderId}</strong>
                    <span className="order-date">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <span className={`status-badge ${statusColors[order.orderStatus]}`}>
                    {order.orderStatus}
                  </span>
                </div>

                <div className="order-card-body">
                  <div className="order-items-preview">
                    <strong>Items:</strong>
                    <p>{order.items.map(item => `${item.name} (${item.quantity})`).join(", ")}</p>
                  </div>
                  <div className="order-details-row">
                    <div className="order-detail">
                      <span>💳 Payment:</span>
                      <strong>{order.paymentMethod}</strong>
                    </div>
                    <div className="order-detail">
                      <span>💰 Total:</span>
                      <strong>₹{order.totalAmount}</strong>
                    </div>
                  </div>
                  <div className="order-address">
                    <span>📍</span>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
                  </div>
                </div>

                <div className="order-card-footer">
                  <button
                    className="track-btn"
                    onClick={() => navigate("/track-order", { state: { orderId: order.orderId } })}
                  >
                    📍 Track Order
                  </button>
                  <button className="view-details-btn">👁️ View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
