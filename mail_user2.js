 
const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,
// // console.log(process.env.company_mail)
//   auth: {
//     user: process.env.company_mail,
//     pass: process.env.mail_password,
//   },
// //    logger: true,
// //   debug: true
// });

let transporter = nodemailer.createTransport(
  smtpTransport({
    host: "mail.crescentpips.ltd", // SMTP host (check your cPanel email settings)
    port: 465, // 465 for SSL, 587 for TLS
    secure: true, // true for port 465, false for 587
    auth: {
      user: process.env.company_mail, // e.g., 'support@crescentpips.com'
      pass: process.env.mail_password, // your email password from cPanel
    },
    tls: {
      rejectUnauthorized: false // prevent cert errors if using self-signed SSL
    }
  })
);

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: ` 🎉 Migration Complete – 5% Advance of Your Withdrawal Sent (KSH 10,000)`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CrescentPips Official Update</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f7fa;
      font-family: 'Poppins', sans-serif;
    }
    .email-wrapper {
      max-width: 650px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 12px;
      padding: 35px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
      border: 1px solid #e2e8f0;
    }
    .email-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .email-header img {
      height: 45px;
    }
    .email-title {
      font-size: 22px;
      font-weight: 600;
      color: #2c5282;
      margin: 20px 0 10px;
    }
    .email-body {
      font-size: 16px;
      color: #4a5568;
      line-height: 1.7;
    }
    .email-body a {
      color: #2c5282;
      text-decoration: none;
      font-weight: 500;
    }
    .cta-button {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 24px;
      background-color: #0c0e28;
      color: #ffffff;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    .cta-button:hover {
      background-color: #1a1c40;
    }
    .email-footer {
      text-align: center;
      font-size: 13px;
      color: #a0aec0;
      margin-top: 40px;
      border-top: 1px solid #e2e8f0;
      padding-top: 20px;
    }
  </style>
</head>
<body>

  <div class="email-wrapper">
    <div class="email-header">
      <img src="https://crescentpips.com/css/images/IMG-20220829-WA0004~4.jpg" alt="CrescentPips Logo">
      <h2 class="email-title">🔄 Important Update: Faster and Secure Migration</h2>
    </div>

    <div class="email-body">
      <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

      <p>We’re currently migrating user accounts to our new and secure platform: <a href="https://crescentpips.ltd">CrescentPips.ltd</a>. Due to high demand, the process has slowed down. To help you migrate faster, we’ve introduced a secure manual process for pending accounts.</p>

      <p><strong>🔹 Follow these steps:</strong></p>
      <ol>
        <li>Go to <a href="https://crescentpips.ltd">https://crescentpips.ltd</a></li>
        <li>Register a new account using the same email you used on CrescentPips.com</li>
        <li>Once done, send us that email address via our official support</li>
      </ol>

      <p><strong>🔒 Security Verification Step:</strong><br>
      For your protection, we’ll send a verification code to your email. Once you receive it, share the code with us to verify and safely migrate your balance to your new account.</p>

      <p><strong>✅ What’s Next:</strong></p>
      <ul>
        <li>Start trading and investing immediately</li>
        <li>Enjoy unlimited withdrawals</li>
        <li>Experience improved platform speed and upgraded security</li>
      </ul>

      <p>We appreciate your patience and ongoing trust in CrescentPips.</p>

      <p><strong>📢 Reminder:</strong><br>
      Migration is <strong>completely free</strong>. If anyone asks you to pay for account migration, <strong>do not pay them</strong> — and report the user immediately.</p>

      <a href="https://crescentpips.ltd" class="cta-button">Visit New Platform</a>

      <p style="margin-top: 30px;"><strong>Need help?</strong><br>
      • +254 703 807 179<br>
      • +254 708 247 360<br>
      • +254 759 160 594</p>

      <p>📧 Email: <strong>support@crescentpips.com</strong></p>

      <p>📢 Join our official WhatsApp channel:<br>
      👉 <a href="https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w">https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w</a></p>

      <p>❌ Please note: Our old WhatsApp number and broadcast list have been permanently closed to avoid impersonation. Do not engage with any unverified contacts.</p>
    </div>

    <div class="email-footer">
      <p>This message was sent from CrescentPips' official system. Always contact verified support for help and updates.</p>
    </div>
  </div>

</body>
</html>
`

  });
};



const sendEmail = (user) =>
  new Promise((resolve, reject) => 
{
    transporter.sendMail(
      create_mail_options({
        first_name: "Mary Wambui", 
        last_name: "Njeri",
        reciever: "softcp226@gmail.com",
      }),
      (err, info) => {
        if (err) {
          console.log(`❌ Error sending email ${err.message}`);
          return reject(err);
        }
        console.log(`✅ Email sent email ${info.response}`);
        resolve(info);
      }
    );
  });

  sendEmail()



























// const nodemailer = require("nodemailer");
// const smtpTransport = require("nodemailer-smtp-transport");

// let transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.crescentpips.com", // SMTP host (check your cPanel email settings)
//     port: 465, // 465 for SSL, 587 for TLS
//     secure: true, // true for port 465, false for 587
//     auth: {
//       user: process.env.company_mail, // e.g., 'support@crescentpips.com'
//       pass: process.env.mail_password, // your email password from cPanel
//     },
//     tls: {
//       rejectUnauthorized: false // prevent cert errors if using self-signed SSL
//     }
//   })
// );

// let create_mail_options = (userInfo) => {
//   return {
//     from: process.env.company_mail, // Must match your SMTP account email
//     to: userInfo.reciever,
//     subject: `🎉 Migration Complete – 5% Advance of Your Withdrawal Sent (KSH 10,000)`,
//     html: `<p>Hello ${userInfo.first_name} ${userInfo.last_name},</p><p>This is your email body.</p>`
//   };
// };

// const sendEmail = (user) =>
//   new Promise((resolve, reject) => {
//     transporter.sendMail(
//       create_mail_options(user),
//       (err, info) => {
//         if (err) {
//           console.log(`❌ Error sending email: ${err.message}`);
//           return reject(err);
//         }
//         console.log(`✅ Email sent: ${info.response}`);
//         resolve(info);
//       }
//     );
//   });

// // Example usage
// sendEmail({
//   first_name: "Mary Wambui",
//   last_name: "Njeri",
//   reciever: "softcp226@gmail.com"
// });
