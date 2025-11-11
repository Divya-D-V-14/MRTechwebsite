
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./CustomerDashboard.css";

// export default function CustomerDashboard() {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);

//   // ✅ Get user data from localStorage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("userData"));
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (!data || data.userType !== "customer" || !isLoggedIn) {
//       navigate("/login");
//     } else {
//       setUserData(data);
//     }
//   }, [navigate]);

//   // ✅ Fetch user's orders
//   useEffect(() => {
//     if (userData && userData.email) {
//       fetchOrders();
//     }
//   }, [userData]);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/orders/customer/${userData.email}`);
//       const data = await response.json();
//       if (data.success) {
//         setOrders(data.orders);
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   if (!userData) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         fontSize: "18px",
//         color: "#666",
//       }}>
//         Loading...
//       </div>
//     );
//   }

//   const totalSpent = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
//   const activeOrders = orders.filter((o) => o.orderStatus !== "delivered").length;

//   const statusColors = {
//     pending: "status-pending",
//     processing: "status-processing",
//     confirmed: "status-processing",
//     shipped: "status-shipped",
//     delivered: "status-delivered",
//   };

//   return (
//     <div className="customer-dashboard">
//       <header className="dashboard-header">
//         <div className="header-content">
//           <div>
//             <h1>Welcome, {userData.fullName}! 👋</h1>
//             <p>Manage your orders and track deliveries</p>
//           </div>
//           <button className="logout-btn" onClick={handleLogout}>
//             🚪 Logout
//           </button>
//         </div>
//       </header>

//       <div className="stats-grid">
//         <div className="stat-card card-blue">
//           <div className="stat-icon">📦</div>
//           <div className="stat-details">
//             <h3>Total Orders</h3>
//             <p className="stat-number">{orders.length}</p>
//             <span className="stat-change">All time</span>
//           </div>
//         </div>

//         <div className="stat-card card-yellow">
//           <div className="stat-icon">🚚</div>
//           <div className="stat-details">
//             <h3>Active Orders</h3>
//             <p className="stat-number">{activeOrders}</p>
//             <span className="stat-change">In progress</span>
//           </div>
//         </div>

//         <div className="stat-card card-green">
//           <div className="stat-icon">💰</div>
//           <div className="stat-details">
//             <h3>Total Spent</h3>
//             <p className="stat-number">₹{totalSpent.toLocaleString()}</p>
//             <span className="stat-change">All time</span>
//           </div>
//         </div>
//       </div>

//       <div className="quick-actions">
//         <h2>Quick Actions</h2>
//         <div className="actions-grid">
//           <button className="action-btn" onClick={() => navigate("/purchase")}>
//             🛍️ Browse Products
//           </button>
//           <button className="action-btn" onClick={() => navigate("/track-order")}>
//             📍 Track Order
//           </button>
//           <button className="action-btn" onClick={() => navigate("/contact")}>
//             💬 Contact Support
//           </button>
//         </div>
//       </div>

//       <div className="orders-section">
//         <div className="section-header">
//           <h2>Your Orders</h2>
//           <button className="refresh-btn" onClick={fetchOrders}>🔄 Refresh</button>
//         </div>

//         {loading ? (
//           <div className="loading-state">
//             <p>Loading orders...</p>
//           </div>
//         ) : orders.length === 0 ? (
//           <div className="empty-state">
//             <span className="empty-icon">📦</span>
//             <h3>No orders yet</h3>
//             <p>Start shopping to see your orders here</p>
//             <button className="shop-now-btn" onClick={() => navigate("/purchase")}>
//               🛍️ Shop Now
//             </button>
//           </div>
//         ) : (
//           <div className="orders-list">
//             {orders.map((order) => (
//               <div key={order.orderId} className="order-card">
//                 <div className="order-card-header">
//                   <div className="order-id">
//                     <strong>{order.orderId}</strong>
//                     <span className="order-date">
//                       {new Date(order.createdAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                   <span className={`status-badge ${statusColors[order.orderStatus]}`}>
//                     {order.orderStatus}
//                   </span>
//                 </div>

//                 <div className="order-card-body">
//                   <div className="order-items-preview">
//                     <strong>Items:</strong>
//                     <p>{order.items.map(item => `${item.name} (${item.quantity})`).join(", ")}</p>
//                   </div>
//                   <div className="order-details-row">
//                     <div className="order-detail">
//                       <span>💳 Payment:</span>
//                       <strong>{order.paymentMethod}</strong>
//                     </div>
//                     <div className="order-detail">
//                       <span>💰 Total:</span>
//                       <strong>₹{order.totalAmount}</strong>
//                     </div>
//                   </div>
//                   <div className="order-address">
//                     <span>📍</span>
//                     <p>{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
//                   </div>
//                 </div>

//                 <div className="order-card-footer">
//                   <button
//                     className="track-btn"
//                     onClick={() => navigate("/track-order", { state: { orderId: order.orderId } })}
//                   >
//                     📍 Track Order
//                   </button>
//                   <button className="view-details-btn">👁️ View Details</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerDashboard.css";
import { 
  FaBox, FaTruck, FaWallet, FaShoppingBag, FaMapMarkerAlt, 
  FaHeadset, FaHeart, FaHistory, FaUser, FaBell, FaSearch,
  FaChartLine, FaStar, FaGift, FaClock
} from "react-icons/fa";

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showNotifications, setShowNotifications] = useState(false);

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
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      navigate("/login");
    }
  };

  if (!userData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  // Statistics
  const totalSpent = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
  const activeOrders = orders.filter((o) => o.orderStatus !== "delivered").length;
  const deliveredOrders = orders.filter((o) => o.orderStatus === "delivered").length;
  const pendingOrders = orders.filter((o) => o.orderStatus === "pending").length;

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterStatus === "all" || order.orderStatus === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusColors = {
    pending: "status-pending",
    processing: "status-processing",
    confirmed: "status-confirmed",
    shipped: "status-shipped",
    delivered: "status-delivered",
  };

  // Mock notifications
  const notifications = [
    { id: 1, message: "Your order #12345 has been shipped!", time: "2 hours ago", unread: true },
    { id: 2, message: "New offers available - Up to 30% off!", time: "1 day ago", unread: true },
    { id: 3, message: "Order #12344 delivered successfully", time: "3 days ago", unread: false },
  ];

  const unreadNotifications = notifications.filter(n => n.unread).length;

  return (
    <div className="customer-dashboard-new">
      {/* Top Navigation Bar */}
      <nav className="dashboard-navbar">
        <div className="navbar-left">
          <div className="brand">
            <FaBox className="brand-icon" />
            <span>My Dashboard</span>
          </div>
        </div>
        
        <div className="navbar-center">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search orders, products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="navbar-right">
          <button 
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaBell />
            {unreadNotifications > 0 && (
              <span className="notification-badge">{unreadNotifications}</span>
            )}
          </button>

          <div className="user-menu">
            <div className="user-avatar">
              <FaUser />
            </div>
            <div className="user-info">
              <span className="user-name">{userData.fullName}</span>
              <span className="user-role">Customer</span>
            </div>
          </div>

          <button className="logout-btn-new" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifications</h3>
            <button onClick={() => setShowNotifications(false)}>✕</button>
          </div>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                <p>{notif.message}</p>
                <span className="notification-time">{notif.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="dashboard-container">
        {/* Hero Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-content">
            <h1>Welcome back, {userData.fullName.split(' ')[0]}! 👋</h1>
            <p>Here's what's happening with your orders today</p>
          </div>
          <div className="welcome-actions">
            <button className="primary-action-btn" onClick={() => navigate("/purchase")}>
              <FaShoppingBag /> Continue Shopping
            </button>
          </div>
        </section>

        {/* Statistics Cards */}
        <section className="stats-section">
          <div className="stat-card-new blue-card">
            <div className="stat-icon-wrapper blue">
              <FaBox />
            </div>
            <div className="stat-content">
              <h3>Total Orders</h3>
              <p className="stat-number">{orders.length}</p>
              <span className="stat-label">All time orders</span>
            </div>
            <div className="stat-chart">
              <FaChartLine />
            </div>
          </div>

          <div className="stat-card-new orange-card">
            <div className="stat-icon-wrapper orange">
              <FaTruck />
            </div>
            <div className="stat-content">
              <h3>Active Orders</h3>
              <p className="stat-number">{activeOrders}</p>
              <span className="stat-label">In transit</span>
            </div>
            <div className="stat-chart">
              <FaClock />
            </div>
          </div>

          <div className="stat-card-new green-card">
            <div className="stat-icon-wrapper green">
              <FaWallet />
            </div>
            <div className="stat-content">
              <h3>Total Spent</h3>
              <p className="stat-number">₹{totalSpent.toLocaleString()}</p>
              <span className="stat-label">Lifetime spending</span>
            </div>
            <div className="stat-chart">
              <FaStar />
            </div>
          </div>

          <div className="stat-card-new purple-card">
            <div className="stat-icon-wrapper purple">
              <FaGift />
            </div>
            <div className="stat-content">
              <h3>Delivered</h3>
              <p className="stat-number">{deliveredOrders}</p>
              <span className="stat-label">Successfully delivered</span>
            </div>
            <div className="stat-chart">
              <FaHistory />
            </div>
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section className="quick-actions-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            <div className="action-card" onClick={() => navigate("/purchase")}>
              <div className="action-icon blue-bg">
                <FaShoppingBag />
              </div>
              <h3>Browse Products</h3>
              <p>Explore our latest collection</p>
            </div>

            <div className="action-card" onClick={() => navigate("/track-order")}>
              <div className="action-icon orange-bg">
                <FaMapMarkerAlt />
              </div>
              <h3>Track Order</h3>
              <p>Get real-time updates</p>
            </div>

            <div className="action-card" onClick={() => navigate("/contact")}>
              <div className="action-icon green-bg">
                <FaHeadset />
              </div>
              <h3>Support</h3>
              <p>We're here to help</p>
            </div>

            <div className="action-card" onClick={() => setFilterStatus("delivered")}>
              <div className="action-icon purple-bg">
                <FaHistory />
              </div>
              <h3>Order History</h3>
              <p>View past purchases</p>
            </div>
          </div>
        </section>

        {/* Orders Section */}
        <section className="orders-section-new">
          <div className="orders-header">
            <div>
              <h2 className="section-title">Your Orders</h2>
              <p className="section-subtitle">Manage and track all your orders</p>
            </div>
            <div className="orders-controls">
              <select 
                className="filter-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
              <button className="refresh-btn-new" onClick={fetchOrders}>
                🔄 Refresh
              </button>
            </div>
          </div>

          {loading ? (
            <div className="loading-state-new">
              <div className="loading-spinner"></div>
              <p>Loading orders...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="empty-state-new">
              <div className="empty-illustration">
                <FaBox size={80} />
              </div>
              <h3>No orders found</h3>
              <p>
                {searchQuery || filterStatus !== "all" 
                  ? "Try adjusting your filters or search query"
                  : "Start shopping to see your orders here"
                }
              </p>
              <button className="shop-now-btn-new" onClick={() => navigate("/purchase")}>
                <FaShoppingBag /> Start Shopping
              </button>
            </div>
          ) : (
            <div className="orders-grid">
              {filteredOrders.map((order) => (
                <div key={order.orderId} className="order-card-new">
                  <div className="order-card-header-new">
                    <div className="order-id-section">
                      <FaBox className="order-icon" />
                      <div>
                        <strong className="order-id-text">#{order.orderId}</strong>
                        <span className="order-date-text">
                          {new Date(order.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    <span className={`status-badge-new ${statusColors[order.orderStatus]}`}>
                      {order.orderStatus}
                    </span>
                  </div>

                  <div className="order-card-body-new">
                    <div className="order-items-section">
                      <h4>Items Ordered</h4>
                      <div className="items-list">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="item-row">
                            <span className="item-name">{item.name}</span>
                            <span className="item-qty">x{item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="order-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">💳 Payment</span>
                        <strong>{order.paymentMethod}</strong>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">💰 Total</span>
                        <strong className="amount-text">₹{order.totalAmount.toLocaleString()}</strong>
                      </div>
                    </div>

                    <div className="order-address-new">
                      <FaMapMarkerAlt />
                      <p>
                        {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="order-card-footer-new">
                    <button
                      className="track-btn-new"
                      onClick={() => navigate("/track-order", { state: { orderId: order.orderId } })}
                    >
                      <FaMapMarkerAlt /> Track Order
                    </button>
                    <button className="details-btn-new">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}