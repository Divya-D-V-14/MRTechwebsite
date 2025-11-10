
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    sku: "",
  });

  // Fetch orders + products
  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      if (data.success) setProducts(data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/orders");
      const data = await response.json();
      if (data.success) {
        const formatted = data.orders.map((o) => ({
          id: o.orderId,
          customer: o.customerName,
          email: o.email,
          phone: o.phone,
          items: Array.isArray(o.items)
            ? o.items.map((i) => i.name).join(", ")
            : o.items,
          total: o.totalAmount,
          status: o.orderStatus,
          date: new Date(o.createdAt).toLocaleDateString(),
          address:
            typeof o.shippingAddress === "object"
              ? `${o.shippingAddress.address}, ${o.shippingAddress.city}, ${o.shippingAddress.state} - ${o.shippingAddress.pincode}`
              : o.shippingAddress,
          fullData: o,
        }));
        setOrders(formatted);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add / Update product
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      const url = editingProduct
        ? `http://localhost:3000/api/products/${editingProduct.id}`
        : "http://localhost:3000/api/products";
      const method = editingProduct ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert(editingProduct ? "✅ Product updated!" : "✅ Product added!");
        setShowForm(false);
        setEditingProduct(null);
        setFormData({ name: "", category: "", stock: "", price: "", sku: "" });
        fetchProducts();
      } else alert("❌ " + data.error);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Delete product
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert("🗑️ Product deleted!");
        fetchProducts();
      } else alert("❌ " + data.error);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Update order status (connected to backend by orderId)
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderStatus: newStatus }),
      });
      const result = await res.json();

      if (result.success) {
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
        );

        if (selectedOrder && selectedOrder.id === orderId) {
          setSelectedOrder({ ...selectedOrder, status: newStatus });
        }

        alert("✅ Order status updated successfully!");
      } else {
        alert("❌ " + (result.error || "Failed to update order"));
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("❌ Error updating order status");
    }
  };

  // ✅ Excel Export Function
  const handleExportExcel = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();

      if (data.success && data.products.length > 0) {
        const worksheet = XLSX.utils.json_to_sheet(
          data.products.map((p) => ({
            Name: p.name,
            Category: p.category,
            Stock: p.stock,
            Price: p.price,
            SKU: p.sku,
          }))
        );
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, "products_export.xlsx");
        alert("✅ Excel downloaded successfully!");
      } else {
        alert("⚠️ No products available to export!");
      }
    } catch (error) {
      console.error("Excel Export Error:", error);
      alert("❌ Failed to export products to Excel");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Dashboard stats
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const lowStockItems = products.filter((p) => p.stock < 5).length;

  const statusColors = {
    pending: "status-pending",
    processing: "status-processing",
    shipped: "status-shipped",
    delivered: "status-delivered",
  };

  // Customer data
  const customers = Object.values(
    orders.reduce((acc, o) => {
      if (!acc[o.customer]) {
        acc[o.customer] = {
          name: o.customer,
          email: o.email,
          totalOrders: 0,
          totalSpent: 0,
          lastDate: o.date,
        };
      }
      acc[o.customer].totalOrders += 1;
      acc[o.customer].totalSpent += o.total;
      acc[o.customer].lastDate = o.date;
      return acc;
    }, {})
  );

  const getFilteredData = () => {
    if (selectedStat === "pending")
      return orders.filter((o) => o.status === "pending");
    if (selectedStat === "lowstock") return products.filter((p) => p.stock < 5);
    if (selectedStat === "orders") return orders;
    return [];
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
          {["dashboard", "orders", "products", "customers", "settings"].map((tab) => (
            <button
              key={tab}
              className={`admin-nav-item ${currentTab === tab ? "active" : ""}`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab === "dashboard" && "📊 "}
              {tab === "orders" && "🛒 "}
              {tab === "products" && "📦 "}
              {tab === "customers" && "👥 "}
              {tab === "settings" && "⚙️ "}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === "orders" && pendingOrders > 0 && (
                <span className="badge">{pendingOrders}</span>
              )}
            </button>
          ))}
        </nav>

        <button className="admin-logout" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>{currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}</h1>
            <p>Welcome back, Admin</p>
          </div>
          <div className="admin-user">
            <span>🔔</span>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        {/* Dashboard */}
        {currentTab === "dashboard" && (
          <div className="admin-content">
            <div className="stats-grid">
              <div className="stat-card card-blue" onClick={() => setSelectedStat("orders")}>
                <h3>Total Orders</h3>
                <p>{totalOrders}</p>
              </div>
              <div className="stat-card card-green">
                <h3>Total Revenue</h3>
                <p>₹{totalRevenue.toLocaleString()}</p>
              </div>
              <div className="stat-card card-yellow" onClick={() => setSelectedStat("pending")}>
                <h3>Pending Orders</h3>
                <p>{pendingOrders}</p>
              </div>
              <div className="stat-card card-red" onClick={() => setSelectedStat("lowstock")}>
                <h3>Low Stock Items</h3>
                <p>{lowStockItems}</p>
              </div>
            </div>

            {selectedStat && (
              <div className="admin-card">
                <h2>
                  {selectedStat === "orders"
                    ? "All Orders"
                    : selectedStat === "pending"
                    ? "Pending Orders"
                    : "Low Stock Products"}
                </h2>
                {selectedStat === "lowstock" ? (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredData().map((p) => (
                        <tr key={p._id}>
                          <td>{p.sku}</td>
                          <td>{p.name}</td>
                          <td>{p.stock}</td>
                          <td>₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredData().map((o) => (
                        <tr key={o.id}>
                          <td>{o.id}</td>
                          <td>{o.customer}</td>
                          <td>₹{o.total}</td>
                          <td>
                            <span className={`status-badge ${statusColors[o.status]}`}>
                              {o.status}
                            </span>
                          </td>
                          <td>{o.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        )}

        {/* Orders Tab */}
        {currentTab === "orders" && (
          <div className="admin-content">
            <div className="admin-card">
              <h2>All Orders</h2>
              {loading ? (
                <p>Loading...</p>
              ) : orders.length === 0 ? (
                <p>No orders yet</p>
              ) : (
                <table className="admin-table">
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
                    {orders.map((o) => (
                      <tr key={o.id}>
                        <td>{o.id}</td>
                        <td>{o.customer}</td>
                        <td>{o.items}</td>
                        <td>₹{o.total}</td>
                        <td>
                          <span className={`status-badge ${statusColors[o.status]}`}>
                            {o.status}
                          </span>
                        </td>
                        <td>{o.date}</td>
                        <td>
                          <button onClick={() => setSelectedOrder(o)}>👁 View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {selectedOrder && (
              <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
                <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h2>Order Details</h2>
                    <button className="close-modal" onClick={() => setSelectedOrder(null)}>
                      ✕
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="detail-section">
                      <h3>👤 Customer Info</h3>
                      <p><strong>Name:</strong> {selectedOrder.customer}</p>
                      <p><strong>Email:</strong> {selectedOrder.email}</p>
                      <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                    </div>
                    <div className="detail-section">
                      <h3>📍 Address</h3>
                      <p>{selectedOrder.address}</p>
                    </div>
                    <div className="detail-section">
                      <h3>📦 Items</h3>
                      <p>{selectedOrder.items}</p>
                      <p><strong>Total:</strong> ₹{selectedOrder.total}</p>
                    </div>
                    <div className="detail-section">
                      <h3>Update Status</h3>
                      <div className="status-buttons">
                        {["pending", "processing", "shipped", "delivered"].map((s) => (
                          <button
                            key={s}
                            className={`status-update-btn ${
                              selectedOrder.status === s ? "active" : ""
                            }`}
                            onClick={() => updateOrderStatus(selectedOrder.id, s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="print-btn">🖨 Print Invoice</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Products, Customers, and Settings Tabs */}
        {currentTab === "products" && (
          <div className="admin-content">
            <div className="admin-card">
              <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Products Management</h2>
                <div className="action-buttons" style={{ display: 'flex', gap: '15px' }}>
                  <button
                    className="add-btn"
                    onClick={() => {
                      setShowForm(true);
                      setEditingProduct(null);
                    }}
                  >
                    ➕ Add Product
                  </button>
                  <button className="import-btn" onClick={handleExportExcel}>
                    📤 Import Excel
                  </button>
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
                    {products.map((p) => (
                      <tr key={p.id}>
                        <td className="product-sku">{p.sku}</td>
                        <td><strong>{p.name}</strong></td>
                        <td>
                          <span className="category-badge">{p.category}</span>
                        </td>
                        <td>
                          <span className={p.stock < 5 ? "stock-low" : "stock-good"}>
                            {p.stock}
                          </span>
                        </td>
                        <td><strong>₹{p.price}</strong></td>
                        <td>
                          <button
                            className="edit-btn"
                            onClick={() => {
                              setEditingProduct(p);
                              setFormData(p);
                              setShowForm(true);
                            }}
                          >
                            ✏️
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteProduct(p.id)}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {showForm && (
              <div className="modal-overlay" onClick={() => setShowForm(false)}>
                <div className="modal-content wide" onClick={(e) => e.stopPropagation()}>
                  <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>
                  <form onSubmit={handleSaveProduct}>
                    <input
                      type="text"
                      placeholder="Product Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    {/* <input
                      type="text"
                      placeholder="Category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                    /> */}
                    <select
  value={formData.category}
  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
  required
  style={{ padding: '10px', width: '100%', fontSize: '14px' }}
>
  <option value="">Select Category</option>
  <option value="Non-Consumable">Non-Consumable</option>
  <option value="Consumable">Consumable</option>
</select>
                    <input
                      type="text"
                      placeholder="SKU"
                      value={formData.sku}
                      onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Stock"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                    <button type="submit">
                      {editingProduct ? "Update Product" : "Add Product"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {currentTab === "customers" && (
          <div className="admin-content">
            <div className="admin-card">
              <h2>Customers & Past Orders</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total Orders</th>
                    <th>Total Spent</th>
                    <th>Last Order Date</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c) => (
                    <tr key={c.email}>
                      <td>{c.name}</td>
                      <td>{c.email}</td>
                      <td>{c.totalOrders}</td>
                      <td>₹{c.totalSpent}</td>
                      <td>{c.lastDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentTab === "settings" && (
          <div className="admin-content">
            <div className="admin-card">
              <h2>⚙️ Settings</h2>
              <p>Here you can manage profile, notifications, and system preferences.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}