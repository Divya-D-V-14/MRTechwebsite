// // // src/pages/Purchase.jsx
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Purchase.css";

// // // Sample Products Data (from your Excel file)
// // const productsData = [
// //   { id: 1, name: "Test Tube Stand", category: "Non-Consumable", stock: 2, price: 850, image: "🧪", sku: "MED-001" },
// //   { id: 2, name: "Syringe Destroyer", category: "Non-Consumable", stock: 1, price: 3500, image: "💉", sku: "MED-002" },
// //   { id: 3, name: "Tourniquet", category: "Non-Consumable", stock: 1, price: 450, image: "🩹", sku: "MED-003" },
// //   { id: 4, name: "Weighing Machine", category: "Non-Consumable", stock: 1, price: 2800, image: "⚖️", sku: "MED-004" },
// //   { id: 5, name: "Stethoscope", category: "Non-Consumable", stock: 1, price: 2500, image: "🩺", sku: "MED-005" },
// //   { id: 6, name: "BP Manual", category: "Non-Consumable", stock: 1, price: 3200, image: "🫀", sku: "MED-006" },
// //   { id: 7, name: "Thermometer (Manual)", category: "Non-Consumable", stock: 1, price: 450, image: "🌡️", sku: "MED-007" },
// //   { id: 8, name: "Pen Torch", category: "Non-Consumable", stock: 1, price: 350, image: "🔦", sku: "MED-008" },
// //   { id: 9, name: "Kidney Tray", category: "Non-Consumable", stock: 1, price: 650, image: "🫘", sku: "MED-009" },
// //   { id: 10, name: "Glucometer", category: "Non-Consumable", stock: 1, price: 1800, image: "🔬", sku: "MED-010" },
// //   { id: 11, name: "Wheel Chair", category: "Non-Consumable", stock: 1, price: 8500, image: "🦽", sku: "MED-011" },
// //   { id: 12, name: "Test Tubes (RED,PURPLE,GREY)", category: "Consumable", stock: 100, price: 150, image: "🧪", sku: "CON-001" },
// //   { id: 13, name: "Medical Gloves", category: "Consumable", stock: 200, price: 380, image: "🧤", sku: "CON-002" },
// //   { id: 14, name: "Surgical Mask", category: "Consumable", stock: 500, price: 250, image: "😷", sku: "CON-003" },
// //   { id: 15, name: "Syringe Set", category: "Consumable", stock: 150, price: 120, image: "💉", sku: "CON-004" },
// //   { id: 16, name: "Bandage", category: "Consumable", stock: 80, price: 85, image: "🩹", sku: "CON-005" }
// // ];

// // const Purchase = () => {
// //   const [products] = useState(productsData);
// //   const [cart, setCart] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [showCart, setShowCart] = useState(false);

// //   // Filter products
// //   const filteredProducts = products.filter((product) => {
// //     const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
// //     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
// //     return matchesCategory && matchesSearch;
// //   });

// //   // Add to cart
// //   const addToCart = (product) => {
// //     const existingItem = cart.find((item) => item.id === product.id);
// //     if (existingItem) {
// //       setCart(
// //         cart.map((item) =>
// //           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// //         )
// //       );
// //     } else {
// //       setCart([...cart, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   // Remove from cart
// //   const removeFromCart = (productId) => {
// //     setCart(cart.filter((item) => item.id !== productId));
// //   };

// //   // Calculate total
// //   const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

// //   return (
// //     <div className="purchase-page">
// //       {/* Hero Section */}
// //       <div className="purchase-hero">
// //         <div className="hero-content">
// //           <h1>G Care Medical Equipment Store</h1>
// //           <p>Quality Healthcare Products for Professionals & Individuals</p>
// //           <div className="hero-stats">
// //             <div className="stat-item">
// //               <span className="stat-number">500+</span>
// //               <span className="stat-label">Products</span>
// //             </div>
// //             <div className="stat-item">
// //               <span className="stat-number">ISO</span>
// //               <span className="stat-label">Certified</span>
// //             </div>
// //             <div className="stat-item">
// //               <span className="stat-number">24/7</span>
// //               <span className="stat-label">Support</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="purchase-container">
// //         {/* Filter Section */}
// //         <div className="filter-section">
// //           <div className="search-box">
// //             <input
// //               type="text"
// //               placeholder="🔍 Search products..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>

// //           <div className="category-filters">
// //             {["All", "Non-Consumable", "Consumable"].map((category) => (
// //               <button
// //                 key={category}
// //                 className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
// //                 onClick={() => setSelectedCategory(category)}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>

// //           <button className="cart-toggle-btn" onClick={() => setShowCart(!showCart)}>
// //             🛒 Cart ({cartCount})
// //           </button>
// //         </div>

// //         {/* Products Grid */}
// //         <div className="products-grid">
// //           {filteredProducts.map((product) => (
// //             <div key={product.id} className="product-card">
// //               <div className="product-image">
// //                 <span className="product-emoji">{product.image}</span>
// //                 <span className="product-category-badge">{product.category}</span>
// //               </div>
// //               <div className="product-info">
// //                 <h3 className="product-name">{product.name}</h3>
// //                 <p className="product-sku">SKU: {product.sku}</p>
// //                 <div className="product-footer">
// //                   <div className="product-price">
// //                     <span className="price-label">₹</span>
// //                     <span className="price-value">{product.price}</span>
// //                   </div>
// //                   <div className="product-stock">
// //                     Stock: <strong>{product.stock}</strong>
// //                   </div>
// //                 </div>
// //                 <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {filteredProducts.length === 0 && (
// //           <div className="no-products">
// //             <p>No products found</p>
// //           </div>
// //         )}
// //       </div>

// //       {/* Cart Sidebar */}
// //       {showCart && (
// //         <div className="cart-overlay" onClick={() => setShowCart(false)}>
// //           <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
// //             <div className="cart-header">
// //               <h2>Shopping Cart ({cartCount} items)</h2>
// //               <button className="close-cart-btn" onClick={() => setShowCart(false)}>
// //                 ✕
// //               </button>
// //             </div>

// //             <div className="cart-items">
// //               {cart.length === 0 ? (
// //                 <div className="empty-cart">
// //                   <p>Your cart is empty</p>
// //                   <span>🛒</span>
// //                 </div>
// //               ) : (
// //                 cart.map((item) => (
// //                   <div key={item.id} className="cart-item">
// //                     <span className="cart-item-emoji">{item.image}</span>
// //                     <div className="cart-item-info">
// //                       <h4>{item.name}</h4>
// //                       <p>₹{item.price} × {item.quantity}</p>
// //                     </div>
// //                     <div className="cart-item-total">₹{item.price * item.quantity}</div>
// //                     <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
// //                       🗑️
// //                     </button>
// //                   </div>
// //                 ))
// //               )}
// //             </div>

// //             {cart.length > 0 && (
// //               <div className="cart-footer">
// //                 <div className="cart-total">
// //                   <span>Total:</span>
// //                   <span className="total-amount">₹{cartTotal}</span>
// //                 </div>
// //                 <Link to="/checkout" className="checkout-btn">
// //                   Proceed to Checkout
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Purchase;



// // // src/pages/Purchase.jsx
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { useCart } from "../context/CartContext"; // 👈 Import useCart
// // import "./Purchase.css";

// // // Sample Products Data
// // const productsData = [
// //   { id: 1, name: "Test Tube Stand", category: "Non-Consumable", stock: 2, price: 850, image: "🧪", sku: "MED-001" },
// //   { id: 2, name: "Syringe Destroyer", category: "Non-Consumable", stock: 1, price: 3500, image: "💉", sku: "MED-002" },
// //   { id: 3, name: "Tourniquet", category: "Non-Consumable", stock: 1, price: 450, image: "🩹", sku: "MED-003" },
// //   { id: 4, name: "Weighing Machine", category: "Non-Consumable", stock: 1, price: 2800, image: "⚖️", sku: "MED-004" },
// //   { id: 5, name: "Stethoscope", category: "Non-Consumable", stock: 1, price: 2500, image: "🩺", sku: "MED-005" },
// //   { id: 6, name: "BP Manual", category: "Non-Consumable", stock: 1, price: 3200, image: "🫀", sku: "MED-006" },
// //   { id: 7, name: "Thermometer (Manual)", category: "Non-Consumable", stock: 1, price: 450, image: "🌡️", sku: "MED-007" },
// //   { id: 8, name: "Pen Torch", category: "Non-Consumable", stock: 1, price: 350, image: "🔦", sku: "MED-008" },
// //   { id: 9, name: "Kidney Tray", category: "Non-Consumable", stock: 1, price: 650, image: "🫘", sku: "MED-009" },
// //   { id: 10, name: "Glucometer", category: "Non-Consumable", stock: 1, price: 1800, image: "🔬", sku: "MED-010" },
// //   { id: 11, name: "Wheel Chair", category: "Non-Consumable", stock: 1, price: 8500, image: "🦽", sku: "MED-011" },
// //   { id: 12, name: "Test Tubes (RED,PURPLE,GREY)", category: "Consumable", stock: 100, price: 150, image: "🧪", sku: "CON-001" },
// //   { id: 13, name: "Medical Gloves", category: "Consumable", stock: 200, price: 380, image: "🧤", sku: "CON-002" },
// //   { id: 14, name: "Surgical Mask", category: "Consumable", stock: 500, price: 250, image: "😷", sku: "CON-003" },
// //   { id: 15, name: "Syringe Set", category: "Consumable", stock: 150, price: 120, image: "💉", sku: "CON-004" },
// //   { id: 16, name: "Bandage", category: "Consumable", stock: 80, price: 85, image: "🩹", sku: "CON-005" }
// // ];

// // const Purchase = () => {
// //   const [products] = useState(productsData);
// //   const { cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice } = useCart(); // 👈 Use cart context
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [showCart, setShowCart] = useState(false);

// //   // Filter products
// //   const filteredProducts = products.filter((product) => {
// //     const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
// //     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
// //     return matchesCategory && matchesSearch;
// //   });

// //   // 👇 Handle add to cart
// //   const handleAddToCart = (product) => {
// //     addToCart(product);
// //     alert(`${product.name} added to cart!`);
// //   };

// //   // 👇 Get cart stats from context
// //   const cartTotal = getTotalPrice();
// //   const cartCount = getTotalItems();

// //   return (
// //     <div className="purchase-page">
// //       {/* Hero Section */}
// //       <div className="purchase-hero">
// //         <div className="hero-content">
// //           <h1>G Care Medical Equipment Store</h1>
// //           <p>Quality Healthcare Products for Professionals & Individuals</p>
// //           <div className="hero-stats">
// //             <div className="stat-item">
// //               <span className="stat-number">500+</span>
// //               <span className="stat-label">Products</span>
// //             </div>
// //             <div className="stat-item">
// //               <span className="stat-number">ISO</span>
// //               <span className="stat-label">Certified</span>
// //             </div>
// //             <div className="stat-item">
// //               <span className="stat-number">24/7</span>
// //               <span className="stat-label">Support</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="purchase-container">
// //         {/* Filter Section */}
// //         <div className="filter-section">
// //           <div className="search-box">
// //             <input
// //               type="text"
// //               placeholder="🔍 Search products..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>

// //           <div className="category-filters">
// //             {["All", "Non-Consumable", "Consumable"].map((category) => (
// //               <button
// //                 key={category}
// //                 className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
// //                 onClick={() => setSelectedCategory(category)}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>

// //           <button className="cart-toggle-btn" onClick={() => setShowCart(!showCart)}>
// //             🛒 Cart ({cartCount}) {/* 👈 Show live cart count */}
// //           </button>
// //         </div>

// //         {/* Products Grid */}
// //         <div className="products-grid">
// //           {filteredProducts.map((product) => (
// //             <div key={product.id} className="product-card">
// //               <div className="product-image">
// //                 <span className="product-emoji">{product.image}</span>
// //                 <span className="product-category-badge">{product.category}</span>
// //               </div>
// //               <div className="product-info">
// //                 <h3 className="product-name">{product.name}</h3>
// //                 <p className="product-sku">SKU: {product.sku}</p>
// //                 <div className="product-footer">
// //                   <div className="product-price">
// //                     <span className="price-label">₹</span>
// //                     <span className="price-value">{product.price}</span>
// //                   </div>
// //                   <div className="product-stock">
// //                     Stock: <strong>{product.stock}</strong>
// //                   </div>
// //                 </div>
// //                 <button 
// //                   className="add-to-cart-btn" 
// //                   onClick={() => handleAddToCart(product)} // 👈 Use context function
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {filteredProducts.length === 0 && (
// //           <div className="no-products">
// //             <p>No products found</p>
// //           </div>
// //         )}
// //       </div>

// //       {/* Cart Sidebar */}
// //       {showCart && (
// //         <div className="cart-overlay" onClick={() => setShowCart(false)}>
// //           <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
// //             <div className="cart-header">
// //               <h2>Shopping Cart ({cartCount} items)</h2>
// //               <button className="close-cart-btn" onClick={() => setShowCart(false)}>
// //                 ✕
// //               </button>
// //             </div>

// //             <div className="cart-items">
// //               {cartItems.length === 0 ? ( // 👈 Use cartItems from context
// //                 <div className="empty-cart">
// //                   <p>Your cart is empty</p>
// //                   <span>🛒</span>
// //                 </div>
// //               ) : (
// //                 cartItems.map((item) => ( // 👈 Map through cartItems
// //                   <div key={item.id} className="cart-item">
// //                     <span className="cart-item-emoji">{item.image}</span>
// //                     <div className="cart-item-info">
// //                       <h4>{item.name}</h4>
// //                       <p>₹{item.price} × {item.quantity}</p>
// //                     </div>
// //                     <div className="cart-item-total">₹{item.price * item.quantity}</div>
// //                     <button 
// //                       className="remove-btn" 
// //                       onClick={() => removeFromCart(item.id)} // 👈 Use context remove
// //                     >
// //                       🗑️
// //                     </button>
// //                   </div>
// //                 ))
// //               )}
// //             </div>

// //             {cartItems.length > 0 && (
// //               <div className="cart-footer">
// //                 <div className="cart-total">
// //                   <span>Total:</span>
// //                   <span className="total-amount">₹{cartTotal}</span>
// //                 </div>
// //                 <Link to="/checkout" className="checkout-btn">
// //                   Proceed to Checkout
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Purchase;





// // // ✅ src/pages/Purchase.jsx
// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { useCart } from "../context/CartContext";
// // import "./Purchase.css";

// // const Purchase = () => {
// //   const [products, setProducts] = useState([]);
// //   const { cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice } = useCart();
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [showCart, setShowCart] = useState(false);
// //   const [loading, setLoading] = useState(true);

// //   // ✅ Fetch products from backend
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const res = await fetch("http://localhost:3000/api/products");
// //         const data = await res.json();
// //         if (data.success) {
// //           setProducts(data.products);
// //         } else {
// //           console.error("Failed to load products:", data.error);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   // 🔍 Filter products
// //   const filteredProducts = products.filter((product) => {
// //     const matchesCategory =
// //       selectedCategory === "All" || product.category === selectedCategory;
// //     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
// //     return matchesCategory && matchesSearch;
// //   });

// //   // 🛒 Add to Cart
// //   const handleAddToCart = (product) => {
// //     addToCart(product);
// //     alert(`${product.name} added to cart!`);
// //   };

// //   // 💰 Cart stats
// //   const cartTotal = getTotalPrice();
// //   const cartCount = getTotalItems();

// //   return (
// //     <div className="purchase-page">
// //       {/* Hero Section */}
// //       <div className="purchase-hero">
// //         <div className="hero-content">
// //           <h1>G Care Medical Equipment Store</h1>
// //           <p>Quality Healthcare Products for Professionals & Individuals</p>
// //           <div className="hero-stats">
// //             <div className="stat-item">
// //               <span className="stat-number">{products.length}</span>
// //               <span className="stat-label">Products</span>
// //             </div>
// //             <div className="stat-item">
// //               <span className="stat-number">ISO</span>
// //               <span className="stat-label">Certified</span>
// //             </div>
// //             <div className="stat-item">
// //               <span className="stat-number">24/7</span>
// //               <span className="stat-label">Support</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="purchase-container">
// //         {/* Filter Section */}
// //         <div className="filter-section">
// //           <div className="search-box">
// //             <input
// //               type="text"
// //               placeholder="🔍 Search products..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>

// //           <div className="category-filters">
// //             {["All", "Non-Consumable", "Consumable"].map((category) => (
// //               <button
// //                 key={category}
// //                 className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
// //                 onClick={() => setSelectedCategory(category)}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>

// //           <button className="cart-toggle-btn" onClick={() => setShowCart(!showCart)}>
// //             🛒 Cart ({cartCount})
// //           </button>
// //         </div>

// //         {/* Products Grid */}
// //         {loading ? (
// //           <p style={{ textAlign: "center", padding: "40px" }}>Loading products...</p>
// //         ) : filteredProducts.length === 0 ? (
// //           <div className="no-products">
// //             <p>No products found</p>
// //           </div>
// //         ) : (
// //           <div className="products-grid">
// //             {filteredProducts.map((product) => (
// //               <div key={product._id} className="product-card">
// //                 <div className="product-image">
// //                   <span className="product-emoji">{product.image || "🩺"}</span>
// //                   <span className="product-category-badge">{product.category}</span>
// //                 </div>
// //                 <div className="product-info">
// //                   <h3 className="product-name">{product.name}</h3>
// //                   <p className="product-sku">SKU: {product.sku}</p>
// //                   <div className="product-footer">
// //                     <div className="product-price">
// //                       <span className="price-label">₹</span>
// //                       <span className="price-value">{product.price}</span>
// //                     </div>
// //                     <div className="product-stock">
// //                       Stock: <strong>{product.stock}</strong>
// //                     </div>
// //                   </div>
// //                   <button
// //                     className="add-to-cart-btn"
// //                     onClick={() => handleAddToCart(product)}
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Cart Sidebar */}
// //       {showCart && (
// //         <div className="cart-overlay" onClick={() => setShowCart(false)}>
// //           <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
// //             <div className="cart-header">
// //               <h2>Shopping Cart ({cartCount} items)</h2>
// //               <button className="close-cart-btn" onClick={() => setShowCart(false)}>
// //                 ✕
// //               </button>
// //             </div>

// //             <div className="cart-items">
// //               {cartItems.length === 0 ? (
// //                 <div className="empty-cart">
// //                   <p>Your cart is empty</p>
// //                   <span>🛒</span>
// //                 </div>
// //               ) : (
// //                 cartItems.map((item) => (
// //                   <div key={item._id} className="cart-item">
// //                     <span className="cart-item-emoji">{item.image || "📦"}</span>
// //                     <div className="cart-item-info">
// //                       <h4>{item.name}</h4>
// //                       <p>
// //                         ₹{item.price} × {item.quantity}
// //                       </p>
// //                     </div>
// //                     <div className="cart-item-total">₹{item.price * item.quantity}</div>
// //                     <button
// //                       className="remove-btn"
// //                       onClick={() => removeFromCart(item._id)}
// //                     >
// //                       🗑️
// //                     </button>
// //                   </div>
// //                 ))
// //               )}
// //             </div>

// //             {cartItems.length > 0 && (
// //               <div className="cart-footer">
// //                 <div className="cart-total">
// //                   <span>Total:</span>
// //                   <span className="total-amount">₹{cartTotal}</span>
// //                 </div>
// //                 <Link to="/checkout" className="checkout-btn">
// //                   Proceed to Checkout
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Purchase;



// // ✅ src/pages/Purchase.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Purchase.css";

// const Purchase = () => {
//   const [products, setProducts] = useState([]);
//   const { cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice } = useCart();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showCart, setShowCart] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch all products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/products");
//         const data = await res.json();
//         if (data.success) {
//           setProducts(data.products);
//         } else {
//           console.error("Failed to load products:", data.error);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // 🔍 Filter products by category & search
//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//       selectedCategory === "All" || product.category === selectedCategory;
//     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // 🛒 Add to cart
//   const handleAddToCart = (product) => {
//     addToCart(product);
//     alert(`${product.name} added to cart!`);
//   };

//   // 💰 Cart stats
//   const cartTotal = getTotalPrice();
//   const cartCount = getTotalItems();

//   return (
//     <div className="purchase-page">
//       {/* Hero Section */}
//       <div className="purchase-hero">
//         <div className="hero-content">
//           <h1>G Care Medical Equipment Store</h1>
//           <p>Quality Healthcare Products for Professionals & Individuals</p>
//           <div className="hero-stats">
//             <div className="stat-item">
//               <span className="stat-number">{products.length}</span>
//               <span className="stat-label">Products</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">ISO</span>
//               <span className="stat-label">Certified</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">24/7</span>
//               <span className="stat-label">Support</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="purchase-container">
//         {/* Filter Section */}
//         <div className="filter-section">
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="🔍 Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="category-filters">
//             {["All", "Non-Consumable", "Consumable"].map((category) => (
//               <button
//                 key={category}
//                 className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <button className="cart-toggle-btn" onClick={() => setShowCart(!showCart)}>
//             🛒 Cart ({cartCount})
//           </button>
//         </div>

//         {/* Products Grid */}
//         {loading ? (
//           <p style={{ textAlign: "center", padding: "40px" }}>Loading products...</p>
//         ) : filteredProducts.length === 0 ? (
//           <div className="no-products">
//             <p>No products found in this category</p>
//           </div>
//         ) : (
//           <div className="products-grid">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="product-card">
//                 <div className="product-image">
//                   <span className="product-emoji">{product.image || "🩺"}</span>
//                   <span className="product-category-badge">{product.category}</span>
//                 </div>
//                 <div className="product-info">
//                   <h3 className="product-name">{product.name}</h3>
//                   <p className="product-sku">SKU: {product.sku}</p>
//                   <div className="product-footer">
//                     <div className="product-price">
//                       <span className="price-label">₹</span>
//                       <span className="price-value">{product.price}</span>
//                     </div>
//                     <div className="product-stock">
//                       Stock: <strong>{product.stock}</strong>
//                     </div>
//                   </div>
//                   <button
//                     className="add-to-cart-btn"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Cart Sidebar */}
//       {showCart && (
//         <div className="cart-overlay" onClick={() => setShowCart(false)}>
//           <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
//             <div className="cart-header">
//               <h2>Shopping Cart ({cartCount} items)</h2>
//               <button className="close-cart-btn" onClick={() => setShowCart(false)}>
//                 ✕
//               </button>
//             </div>

//             <div className="cart-items">
//               {cartItems.length === 0 ? (
//                 <div className="empty-cart">
//                   <p>Your cart is empty</p>
//                   <span>🛒</span>
//                 </div>
//               ) : (
//                 cartItems.map((item) => (
//                   <div key={item._id} className="cart-item">
//                     <span className="cart-item-emoji">{item.image || "📦"}</span>
//                     <div className="cart-item-info">
//                       <h4>{item.name}</h4>
//                       <p>
//                         ₹{item.price} × {item.quantity}
//                       </p>
//                     </div>
//                     <div className="cart-item-total">₹{item.price * item.quantity}</div>
//                     <button
//                       className="remove-btn"
//                       onClick={() => removeFromCart(item._id)}
//                     >
//                       🗑️
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>

//             {cartItems.length > 0 && (
//               <div className="cart-footer">
//                 <div className="cart-total">
//                   <span>Total:</span>
//                   <span className="total-amount">₹{cartTotal}</span>
//                 </div>
//                 <Link to="/checkout" className="checkout-btn">
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Purchase;

// src/pages/Purchase.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Purchase.css";

const Purchase = () => {
  const { cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  // ✅ Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to load products. Please refresh the page.");
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filter products by category + search
  const filteredProducts = products.filter((product) => {
    const productCategory = product.category?.trim().toLowerCase();
    const selected = selectedCategory.toLowerCase();

    const matchesCategory =
      selected === "all" || productCategory === selected;

    const matchesSearch = product.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // ✅ Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  // ✅ Cart stats
  const cartTotal = getTotalPrice();
  const cartCount = getTotalItems();

  return (
    <div className="purchase-page">
      {/* Hero Section */}
      <div className="purchase-hero">
        <div className="hero-content">
          <h1>G Care Medical Equipment Store</h1>
          <p>Quality Healthcare Products for Professionals & Individuals</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">ISO</span>
              <span className="stat-label">Certified</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="purchase-container">
        {/* Filter Section */}
        <div className="filter-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {["All", "Non-Consumable", "Consumable"].map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="cart-toggle-btn" onClick={() => setShowCart(!showCart)}>
            🛒 Cart ({cartCount})
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">🧴</span>
                  <span className="product-category-badge">
                    {product.category}
                  </span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-sku">SKU: {product.sku}</p>
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-label">₹</span>
                      <span className="price-value">{product.price}</span>
                    </div>
                    <div className="product-stock">
                      Stock: <strong>{product.stock}</strong>
                    </div>
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found</p>
            </div>
          )}
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Shopping Cart ({cartCount} items)</h2>
              <button className="close-cart-btn" onClick={() => setShowCart(false)}>
                ✕
              </button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                  <span>🛒</span>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span className="cart-item-emoji">🧴</span>
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="cart-item-total">₹{item.price * item.quantity}</div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">₹{cartTotal}</span>
                </div>
                <Link to="/checkout" className="checkout-btn">
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;

