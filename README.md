/* ===== HERO SECTION ===== */
.hero {
  padding: 40px 20px;
  min-height: calc(100vh - 70px);

  /* dark navy background + subtle grid */
  background-color: #0f172a;
  background-image: 
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

/* ===== LEFT CONTENT ===== */
.hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 20px 0;

  /* gradient heading text */
  background: linear-gradient(
    90deg,
    var(--color-secondary),
    var(--color-accent1),
    var(--color-accent2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-sub {
  color: #e5e7eb;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* ===== BUTTONS ===== */
.hero-buttons {
  display: flex;
  flex-direction: column;  /* 🔑 vertical stack */
  gap: 15px;
  margin-top: 20px;
  max-width: 320px; /* optional: restrict width for neat look */
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px 22px;
  border-radius: 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;              /* 🔑 each button takes full width */
  justify-content: center;  /* center align text+icon */
}

.btn-primary {
  background-color: var(--color-secondary);
  color: #fff;
  border: none;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.btn-primary:hover {
  filter: brightness(0.95);
}

.btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.08);
}

.btn-icon {
  font-size: 1.1rem;
}

/* ===== RIGHT IMAGE ===== */
.hero-right {
  display: flex;
  justify-content: center;
}

.hero-img {
  width: 100%;
  max-width: 650px;
  height: auto;
  display: block;
  filter: drop-shadow(0 12px 24px rgba(0,0,0,0.25));
  border-radius: 8px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 780px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;              /* mobile la full width */
    justify-content: center;
  }
}
