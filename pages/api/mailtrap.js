import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const body = req.body;

  const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const textContent = `Hey Neon!\nMy name is ${body.firstName} ${body.lastName}.\nMy feedback: ${body.feedback}`;

  const htmlContent = `<div><p>Hey Neon!</p><p>My name is ${body.firstName} ${body.lastName}.</p><p>My feedback: ${body.feedback}</p></div>`;

  const mailData = {
    from: 'test@example.com',
    to: 'test@example.com',
    subject: `${body.firstName} sent you feedback`,
    text: textContent,
    html: htmlContent,
  };

  transport.sendMail(mailData, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Message sent: ${info.messageId}`);
  });

  res.status(200).json(body);
}
