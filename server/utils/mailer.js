import nodemailer from 'nodemailer';

export function createTransport() {
  const secure = String(process.env.SMTP_SECURE).toLowerCase() === 'true';
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

export async function sendEnquiryMail({ name, email, phone, service, message }) {
  const transporter = createTransport();

  const html = `
    <h2>New Website Enquiry</h2>
    <p><b>Name:</b> ${escapeHtml(name)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Phone:</b> ${escapeHtml(phone || '-')}</p>
    <p><b>Service:</b> ${escapeHtml(service)}</p>
    <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g,'<br/>')}</p>
    <hr/>
    <small>Sent at ${new Date().toLocaleString()}</small>
  `;

  await transporter.sendMail({
    from: `"MRT Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    subject: `Website Enquiry — ${name} (${service})`,
    replyTo: email,
    html
  });
}

function escapeHtml(s='') {
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
