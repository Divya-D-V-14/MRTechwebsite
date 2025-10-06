import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import contactRouter from './routes/contact.routes.js';

const app = express();

// CORS
const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowed.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  methods: ['GET','POST'],
  credentials: false
}));

// Security + parsers
app.use(helmet());
app.use(express.json({ limit: '200kb' }));

// Rate limit (basic)
const limiter = rateLimit({ windowMs: 60 * 1000, max: 20 });
app.use('/api/', limiter);

// Health
app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// Routes
app.use('/api/contact', contactRouter);

// 404
app.use((req,res)=> res.status(404).json({ error: 'Not found' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running http://localhost:${PORT}`));
