// src/pages/CustomerDashboard.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerDashboard.css";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail") || "customer@example.com";
  const userName = "Rajesh Kumar"; // You can get this from localStorage or API

  const [activeTab, setActiveTab] = useState("overview");

  // Sample Orders Data - Replace with API call
  const recentOrders = [
    { id: "#ORD-001", date: "2025-10-28", items: "Stethoscope, BP Manual", total: 5700, status: "Delivered" },
    { id: "#ORD-002", date: "2025-10-25", items: "Glucometer", total: 1800, status: "Shipped" },
    { id: "#ORD-003", date: "2025-10-20", items: "Test Tubes", total: 150, status: "Processing" }
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="customer-dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="user-avatar">
            <span>{userName.charAt(0)}</span>
          </div>
          <div className="user-info">
            <h3>{userName}</h3>
            <p>{userEmail}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <span className="nav-icon">📊</span>
            <span>Overview</span>
          </button>
          <button
            className={`nav-item ${activeTab === "orders" ? "active" : ""}`}
            onClick={() => setActiveTab("orders")}
          >
            <span className="nav-icon">📦</span>
            <span>My Orders</span>
          </button>
          <button
            className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <span className="nav-icon">👤</span>
            <span>Profile</span>
          </button>
          <button
            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </button>
          <Link to="/purchase" className="nav-item">
            <span className="nav-icon">🛒</span>
            <span>Continue Shopping</span>
          </Link>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Welcome back, {userName}! 👋</h1>
            <p>Here's what's happening with your orders today</p>
          </div>
          <Link to="/purchase" className="shop-btn">
            🛒 Shop Now
          </Link>
        </header>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="dashboard-content">
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  📦
                </div>
                <div className="stat-info">
                  <h3>Total Orders</h3>
                  <p className="stat-number">12</p>
                  <span className="stat-change positive">+2 this month</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
                  🚚
                </div>
                <div className="stat-info">
                  <h3>Pending Orders</h3>
                  <p className="stat-number">2</p>
                  <span className="stat-change">Awaiting shipment</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>
                  ✅
                </div>
                <div className="stat-info">
                  <h3>Completed</h3>
                  <p className="stat-number">10</p>
                  <span className="stat-change positive">All delivered</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }}>
                  💰
                </div>
                <div className="stat-info">
                  <h3>Total Spent</h3>
                  <p className="stat-number">₹24,500</p>
                  <span className="stat-change">Lifetime</span>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="recent-orders">
              <div className="section-header">
                <h2>Recent Orders</h2>
                <button onClick={() => setActiveTab("orders")} className="view-all-btn">
                  View All →
                </button>
              </div>

              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="order-id">{order.id}</td>
                        <td>{order.date}</td>
                        <td className="order-items">{order.items}</td>
                        <td className="order-total">₹{order.total}</td>
                        <td>
                          <span className={`status-badge status-${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="action-btn">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="actions-grid">
                <Link to="/purchase" className="action-card">
                  <span className="action-icon">🛍️</span>
                  <h3>Browse Products</h3>
                  <p>Explore our medical equipment catalog</p>
                </Link>
                <button className="action-card" onClick={() => setActiveTab("orders")}>
                  <span className="action-icon">📋</span>
                  <h3>Track Orders</h3>
                  <p>Check your order status in real-time</p>
                </button>
                <button className="action-card" onClick={() => setActiveTab("profile")}>
                  <span className="action-icon">📞</span>
                  <h3>Contact Support</h3>
                  <p>Get help from our 24/7 support team</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="dashboard-content">
            <h2 className="content-title">My Orders</h2>
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="order-id">{order.id}</td>
                      <td>{order.date}</td>
                      <td className="order-items">{order.items}</td>
                      <td className="order-total">₹{order.total}</td>
                      <td>
                        <span className={`status-badge status-${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="dashboard-content">
            <h2 className="content-title">My Profile</h2>
            <div className="profile-card">
              <div className="profile-section">
                <h3>Personal Information</h3>
                <div className="profile-grid">
                  <div className="profile-field">
                    <label>Full Name</label>
                    <input type="text" defaultValue={userName} />
                  </div>
                  <div className="profile-field">
                    <label>Email</label>
                    <input type="email" defaultValue={userEmail} />
                  </div>
                  <div className="profile-field">
                    <label>Phone</label>
                    <input type="tel" defaultValue="+91 9876543210" />
                  </div>
                  <div className="profile-field">
                    <label>Address</label>
                    <textarea rows="3" defaultValue="123, Anna Nagar, Chennai - 600001"></textarea>
                  </div>
                </div>
                <button className="save-btn">Save Changes</button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="dashboard-content">
            <h2 className="content-title">Settings</h2>
            <div className="settings-card">
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Email Notifications</h3>
                  <p>Receive order updates via email</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h3>SMS Notifications</h3>
                  <p>Get order alerts via SMS</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Marketing Emails</h3>
                  <p>Receive promotional offers</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomerDashboard;



// import React from "react";

// const CustomerDashboard = () => {
//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Customer Dashboard Page</h1>
//     </div>
//   );
// };

// export default CustomerDashboard;
