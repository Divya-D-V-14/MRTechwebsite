import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEnquiryMail } from '../utils/mailer.js';

const router = Router();

// validators
const validate = [
  body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
  body('phone').optional({ nullable: true }).isLength({ min: 7, max: 20 }).withMessage('Phone length invalid'),
  body('service').trim().isLength({ min: 2, max: 60 }),
  body('message').trim().isLength({ min: 2, max: 500 }).withMessage('Message required')
];

router.post('/', validate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { name, email, phone, service, message } = req.body;

  // email
  try {
    await sendEnquiryMail({ name, email, phone, service, message });
  } catch (e) {
    console.error('MAIL ERROR:', e);
    return res.status(502).json({ error: 'Mail send failed' });
  }

  // simple JSON log (optional “DB”)
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dataDir = path.join(__dirname, '..', 'data');
    const file = path.join(dataDir, 'enquiries.json');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const entry = { ts: new Date().toISOString(), name, email, phone, service, message };
    let arr = [];
    if (fs.existsSync(file)) {
      arr = JSON.parse(fs.readFileSync(file, 'utf8') || '[]');
    }
    arr.push(entry);
    fs.writeFileSync(file, JSON.stringify(arr, null, 2));
  } catch (e) {
    console.warn('LOG WRITE WARN:', e.message);
  }

  return res.json({ ok: true });
});

export default router;
