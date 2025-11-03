// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const sampleOrders = [
  { id: "#ORD-001", customer: "Rajesh Kumar", email: "rajesh@email.com", phone: "9876543210", items: "Stethoscope, BP Manual", total: 5700, status: "pending", date: "2025-10-28", address: "123 Anna Nagar, Chennai - 600001" },
  { id: "#ORD-002", customer: "Priya Sharma", email: "priya@email.com", phone: "9876543211", items: "Glucometer, Test Tubes", total: 1950, status: "processing", date: "2025-10-28", address: "45 T Nagar, Chennai - 600017" },
  { id: "#ORD-003", customer: "Vijay Anand", email: "vijay@email.com", phone: "9876543212", items: "Wheel Chair", total: 8500, status: "shipped", date: "2025-10-27", address: "78 Adyar, Chennai - 600020" },
  { id: "#ORD-004", customer: "Lakshmi Devi", email: "lakshmi@email.com", phone: "9876543213", items: "Medical Gloves, Masks", total: 630, status: "delivered", date: "2025-10-26", address: "90 Mylapore, Chennai - 600004" }
];

const sampleProducts = [
  { id: 1, name: "Stethoscope", category: "Non-Consumable", stock: 1, price: 2500, sku: "MED-001" },
  { id: 2, name: "BP Manual", category: "Non-Consumable", stock: 1, price: 3200, sku: "MED-002" },
  { id: 3, name: "Glucometer", category: "Non-Consumable", stock: 1, price: 1800, sku: "MED-003" },
  { id: 4, name: "Test Tubes", category: "Consumable", stock: 50, price: 150, sku: "CON-001" },
  { id: 5, name: "Medical Gloves", category: "Consumable", stock: 100, price: 380, sku: "CON-002" }
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [orders, setOrders] = useState(sampleOrders);
  const [products] = useState(sampleProducts);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(o => o.status === "pending").length;
  const lowStockItems = products.filter(p => p.stock < 5).length;

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({...selectedOrder, status: newStatus});
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const statusColors = {
    pending: "status-pending",
    processing: "status-processing",
    shipped: "status-shipped",
    delivered: "status-delivered"
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-logo">
            <img src="/MR LOGO.jpeg" alt="Logo" />
          </div>
          <h2>Admin Panel</h2>
          <p>G Care Management</p>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${currentTab === "dashboard" ? "active" : ""}`}
            onClick={() => setCurrentTab("dashboard")}
          >
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </button>
          <button
            className={`admin-nav-item ${currentTab === "orders" ? "active" : ""}`}
            onClick={() => setCurrentTab("orders")}
          >
            <span className="nav-icon">🛒</span>
            <span>Orders</span>
            {pendingOrders > 0 && <span className="badge">{pendingOrders}</span>}
          </button>
          <button
            className={`admin-nav-item ${currentTab === "products" ? "active" : ""}`}
            onClick={() => setCurrentTab("products")}
          >
            <span className="nav-icon">📦</span>
            <span>Products</span>
          </button>
          <button
            className={`admin-nav-item ${currentTab === "customers" ? "active" : ""}`}
            onClick={() => setCurrentTab("customers")}
          >
            <span className="nav-icon">👥</span>
            <span>Customers</span>
          </button>
          <button
            className={`admin-nav-item ${currentTab === "settings" ? "active" : ""}`}
            onClick={() => setCurrentTab("settings")}
          >
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </button>
        </nav>

        <button className="admin-logout" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <div>
            <h1>{currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}</h1>
            <p>Welcome back, Admin</p>
          </div>
          <div className="admin-user">
            <span className="notification-icon">🔔</span>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        {/* Dashboard Content */}
        {currentTab === "dashboard" && (
          <div className="admin-content">
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card card-blue">
                <div className="stat-icon">🛒</div>
                <div className="stat-details">
                  <h3>Total Orders</h3>
                  <p className="stat-number">{totalOrders}</p>
                  <span className="stat-change positive">+12% this month</span>
                </div>
              </div>

              <div className="stat-card card-green">
                <div className="stat-icon">💰</div>
                <div className="stat-details">
                  <h3>Total Revenue</h3>
                  <p className="stat-number">₹{totalRevenue.toLocaleString()}</p>
                  <span className="stat-change positive">+8% this month</span>
                </div>
              </div>

              <div className="stat-card card-yellow">
                <div className="stat-icon">⏳</div>
                <div className="stat-details">
                  <h3>Pending Orders</h3>
                  <p className="stat-number">{pendingOrders}</p>
                  <span className="stat-change">Needs attention</span>
                </div>
              </div>

              <div className="stat-card card-red">
                <div className="stat-icon">⚠️</div>
                <div className="stat-details">
                  <h3>Low Stock Items</h3>
                  <p className="stat-number">{lowStockItems}</p>
                  <span className="stat-change negative">Restock soon</span>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="admin-card">
              <div className="card-header">
                <h2>Recent Orders</h2>
                <button onClick={() => setCurrentTab("orders")} className="view-all-link">
                  View All →
                </button>
              </div>
              <div className="orders-list">
                {orders.slice(0, 5).map(order => (
                  <div key={order.id} className="order-item">
                    <div className="order-avatar">{order.customer.charAt(0)}</div>
                    <div className="order-info">
                      <h4>{order.customer}</h4>
                      <p>{order.id} • {order.date}</p>
                    </div>
                    <div className="order-amount">₹{order.total}</div>
                    <span className={`status-badge ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {currentTab === "orders" && (
          <div className="admin-content">
            <div className="admin-card">
              <div className="card-header">
                <h2>All Orders</h2>
                <input type="text" placeholder="🔍 Search orders..." className="search-input" />
              </div>
              <div className="admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td className="order-id">{order.id}</td>
                        <td>
                          <div>
                            <strong>{order.customer}</strong>
                            <br />
                            <small>{order.phone}</small>
                          </div>
                        </td>
                        <td className="order-items">{order.items}</td>
                        <td className="order-total">₹{order.total}</td>
                        <td>
                          <span className={`status-badge ${statusColors[order.status]}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>{order.date}</td>
                        <td>
                          <button 
                            className="view-btn"
                            onClick={() => setSelectedOrder(order)}
                          >
                            👁️ View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {currentTab === "products" && (
          <div className="admin-content">
            <div className="admin-card">
              <div className="card-header">
                <h2>Products Management</h2>
                <div className="action-buttons">
                  <button className="add-btn">➕ Add Product</button>
                  <button className="import-btn">📤 Import Excel</button>
                </div>
              </div>
              <div className="admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>SKU</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id}>
                        <td className="product-sku">{product.sku}</td>
                        <td><strong>{product.name}</strong></td>
                        <td>
                          <span className="category-badge">{product.category}</span>
                        </td>
                        <td>
                          <span className={product.stock < 5 ? "stock-low" : "stock-good"}>
                            {product.stock}
                          </span>
                        </td>
                        <td><strong>₹{product.price}</strong></td>
                        <td>
                          <button className="edit-btn">✏️</button>
                          <button className="delete-btn">🗑️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Customers & Settings Tabs */}
        {(currentTab === "customers" || currentTab === "settings") && (
          <div className="admin-content">
            <div className="admin-card empty-state">
              <span className="empty-icon">
                {currentTab === "customers" ? "👥" : "⚙️"}
              </span>
              <h2>{currentTab.charAt(0).toUpperCase() + currentTab.slice(1)} Management</h2>
              <p>This section is under development</p>
            </div>
          </div>
        )}
      </main>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Order Details</h2>
              <button className="close-modal" onClick={() => setSelectedOrder(null)}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-section">
                <h3>👤 Customer Information</h3>
                <p><strong>Name:</strong> {selectedOrder.customer}</p>
                <p><strong>Email:</strong> {selectedOrder.email}</p>
                <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              </div>
              <div className="detail-section">
                <h3>📍 Delivery Address</h3>
                <p>{selectedOrder.address}</p>
              </div>
              <div className="detail-section">
                <h3>📦 Order Items</h3>
                <p>{selectedOrder.items}</p>
                <p className="order-total-detail">Total: ₹{selectedOrder.total}</p>
              </div>
              <div className="detail-section">
                <h3>Update Status</h3>
                <div className="status-buttons">
                  {["pending", "processing", "shipped", "delivered"].map(status => (
                    <button
                      key={status}
                      className={`status-update-btn ${selectedOrder.status === status ? "active" : ""}`}
                      onClick={() => updateOrderStatus(selectedOrder.id, status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="print-btn">🖨️ Print Invoice</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

