




























const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// let transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.crescentpips.ltd", // SMTP host (check your cPanel email settings)
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
//   return (mailOptions = {
//     from: process.env.mail,
//     // from:"michelleannschlloser@outlook.com",
//     to: userInfo.reciever,
//     subject: `VPS Hosting Renewal Due`,
//     html: `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// <title>CrescentPips VPS Hosting Renewal</title>
// <style>
//   body {
//     margin: 0;
//     padding: 0;
//     background-color: #f4f7fa;
//     font-family: Arial, sans-serif;
//   }
//   .email-wrapper {
//     max-width: 650px;
//     margin: 40px auto;
//     background-color: #ffffff;
//     border-radius: 12px;
//     padding: 30px;
//     border: 1px solid #e2e8f0;
//     color: #333333;
//   }
//   .email-header {
//     text-align: center;
//     margin-bottom: 20px;
//   }
//   .email-header img {
//     height: 50px;
//   }
//   .email-title {
//     font-size: 22px;
//     font-weight: bold;
//     margin: 15px 0 8px;
//     color: #0c0e28;
//   }
//   .email-subtitle {
//     font-size: 15px;
//     color: #555555;
//   }
//   .highlight-box {
//     background: #fff9e6;
//     border-left: 4px solid #d69e2e;
//     padding: 12px;
//     margin: 20px 0;
//     border-radius: 6px;
//     font-size: 14px;
//   }
//   .cta-button {
//     display: inline-block;
//     margin-top: 25px;
//     padding: 12px 22px;
//     background: #0c0e28;
//     color: #ffffff;
//     border-radius: 6px;
//     text-decoration: none;
//     font-weight: bold;
//     font-size: 14px;
//   }
//   .cta-button:hover {
//     background: #1a1c40;
//   }
//   .contact-box {
//     margin-top: 25px;
//     background: #f9fafc;
//     padding: 12px;
//     border-radius: 6px;
//     font-size: 13px;
//   }
//   .email-footer {
//     text-align: center;
//     font-size: 12px;
//     color: #888888;
//     margin-top: 30px;
//     border-top: 1px solid #e2e8f0;
//     padding-top: 15px;
//   }
// </style>
// </head>
// <body>

// <div class="email-wrapper">
//   <div class="email-header">
//     <img src="https://crescentpips.ltd/assets/logo.png" alt="CrescentPips Logo">
//     <h2 class="email-title">Action Required – VPS Hosting Renewal</h2>
//     <p class="email-subtitle">Ensure uninterrupted access to your trading environment</p>
//   </div>

//   <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

//   <p>As part of your recent jackpot trade execution, our systems automatically allocated <strong>additional VPS resources</strong> to handle the high-volume, high-speed processing required for that successful session. This ensured your trades ran without delay — but it also meant your current hosting allocation was fully utilized ahead of schedule.</p>

//   <p>To maintain uninterrupted access to your trading environment and awarded account benefits, your VPS hosting plan now requires <strong>renewal</strong>.</p>

//   <div class="highlight-box">
//     <strong>Service:</strong> VPS Hosting (Premium Tier)<br>
//     <strong>Amount Due: KSH25,000</strong> <br>
//     <strong>Due Date:</strong> <span style="color:#c53030; font-weight:bold;">14 August 2025</span>
//   </div>

//   <p>Please renew to avoid continued downtime that could impact your active strategies or access to trading and withdrawals.</p>

//   <a href="https://crescentpips.ltd/ke/deposit.html" class="cta-button">Renew VPS Hosting</a>

//   <div class="contact-box">
//     <strong>Billing Support:</strong><br>
//     +254759160594<br>
//     billing@crescentpips.ltd
//   </div>

//   <div class="email-footer">
//     This renewal notice is part of your recent account activity follow-up. Always use official CrescentPips channels for payments.
//   </div>
// </div>

// </body>
// </html>

// `

//   });
// };


let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});


let create_mail_options = (userInfo) => {
  return (mailOptions = {       
    from: process.env.mail,
    to: userInfo.reciever,
    subject: `Treasury Fee Required & VPS Payment Confirmed`,
    html:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>VPS Payment Confirmation & Treasury Fee Notice</title>
  <style>
    body { font-family: 'Segoe UI', Arial, Helvetica, sans-serif; background: #f4f7fb; margin: 0; padding: 0; }
    .container { max-width: 720px; margin: 40px auto; background: #fff; padding: 40px; border-radius: 16px; border: 1px solid #e5e9f2; box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
    .header { text-align: center; margin-bottom: 30px; }
    .header img { height: 60px; margin-bottom: 12px; }
    .header h2 { color: #0c0e28; font-size: 26px; margin: 0; }
    p { color: #444; font-size: 16px; line-height: 1.6; margin: 14px 0; }
    .highlight { background: #f0f4ff; padding: 18px 22px; border-left: 5px solid #3c5dd9; border-radius: 10px; margin: 25px 0; font-size: 15px; color: #2c3e50; }
    .warning { background: #fff4f4; padding: 18px 22px; border-left: 5px solid #d9534f; border-radius: 10px; margin: 25px 0; font-size: 15px; color: #a94442; }
    .info { background: #f9fdf5; padding: 18px 22px; border-left: 5px solid #5cb85c; border-radius: 10px; margin: 25px 0; font-size: 15px; color: #3d8b3d; }
    .cta { display: inline-block; margin-top: 25px; padding: 16px 28px; background: #0c0e28; color: #fff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; letter-spacing: 0.3px; }
    .footer { text-align: center; font-size: 13px; color: #777; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; }
    .badge { display: inline-block; background: #3c5dd9; color: #fff; padding: 6px 16px; border-radius: 20px; font-size: 13px; margin-bottom: 12px; letter-spacing: 0.5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">PAYMENT UPDATE</div>
      <h2>VPS Payment Confirmed & Treasury Fee Required</h2>
    </div>

    <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

    <p>We are pleased to confirm that your recent <strong>VPS Hosting Fee</strong> payment has been received and successfully credited to your CrescentPips account.</p>

    <div class="highlight">
      <strong>Account:</strong> VPS-689055406eda376d1fd7e3bb<br>
      <strong>Status:</strong> VPS Fee Settled ✅<br>
      <strong>Amount Paid:</strong> Confirmed
    </div>

    <p>After your VPS payment, CrescentPips attempted to automatically deduct <strong>KSh50,000</strong> to clear your <strong>Treasury Settlement Fee</strong>. Unfortunately, this transaction could not be completed because your account had no active <strong>network charge clearance</strong. These charges are included with the Treasury Fee and must be settled separately.</p>

    <div class="warning">
      ⚠️ <strong>Notice:</strong> The KSh50,000 deduction was <strong>seized by ChainVergeSignal</strong> due to the pending Treasury Bill. This amount will remain on hold but will be <strong>returned to your account immediately after your Treasury Fee is cleared</strong>.  
    </div>

    <div class="info">
      ✅ All funds you pay are always credited back to your account balance. Once the Treasury Settlement Fee is processed, seized funds will be released and your account will regain full clearance for trading and withdrawals.
    </div>

    <p>To finalize your clearance and avoid further delays, please proceed with your <strong>Treasury Settlement Fee</strong> payment separately.</p>

    <a href="" class="cta">Settle Treasury Fee</a>

    <div class="footer">
      Issued by <strong>Chainvergesignal Billing Desk</strong><br>
      For assistance, contact <strong>support@chainvergesignal.com</strong>
    </div>
  </div>
</body>
</html>

    `

  });
}




transporter.sendMail(
      create_mail_options({
        first_name: "Abdulsalam", 
        last_name: "Mohamed",
        reciever: "abdussaamin010@gmail.com",
      }),
      (err, info) => {
        if (err) {
          console.log(`❌ Error sending email ${err.message}`);
          return reject(err);
        }
        console.log(`✅ Email sent email ${info.response}`);
        // resolve(info);
      }
    );

































// For the top Trader

//        html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Trader of the Week Award - Cash Withdrawal</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
//     body {
//       margin: 0;
//       padding: 0;
//       background-color: #f4f7fb;
//       font-family: 'Poppins', sans-serif;
//     }
//     .email-wrapper {
//       max-width: 650px;
//       margin: 40px auto;
//       background-color: #ffffff;
//       border-radius: 16px;
//       padding: 40px;
//       box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
//       border: 1px solid #e5eaf0;
//     }
//     .email-header {
//       text-align: center;
//       margin-bottom: 30px;
//     }
//     .email-header img {
//       height: 50px;
//     }
//     .email-title {
//       font-size: 26px;
//       font-weight: 600;
//       color: #0c0e28;
//       margin: 25px 0 15px;
//     }
//     .award-badge {
//       display: inline-block;
//       background: linear-gradient(90deg, #f59e0b, #fbbf24);
//       color: #fff;
//       font-size: 14px;
//       font-weight: 600;
//       padding: 8px 16px;
//       border-radius: 20px;
//       margin-top: 8px;
//     }
//     .email-body {
//       font-size: 16px;
//       color: #444;
//       line-height: 1.8;
//     }
//     .highlight {
//       color: #0c0e28;
//       font-weight: 600;
//     }
//     .transaction-box {
//       background-color: #f9fafc;
//       border: 1px solid #e5eaf0;
//       border-radius: 12px;
//       padding: 20px;
//       margin: 25px 0;
//     }
//     .transaction-box h4 {
//       margin: 0 0 15px;
//       font-size: 16px;
//       font-weight: 600;
//       color: #0c0e28;
//     }
//     .transaction-row {
//       display: flex;
//       justify-content: space-between;
//       margin: 6px 0;
//       font-size: 15px;
//       color: #555;
//     }
//     .transaction-row span:first-child {
//       font-weight: 500;
//       color: #333;
//     }
//     .cta-button {
//       display: inline-block;
//       margin-top: 30px;
//       padding: 14px 28px;
//       background-color: #0c0e28;
//       color: #ffffff;
//       border-radius: 8px;
//       text-decoration: none;
//       font-weight: 600;
//       font-size: 15px;
//       transition: background 0.3s ease;
//     }
//     .cta-button:hover {
//       background-color: #1a1c40;
//     }
//     .email-footer {
//       text-align: center;
//       font-size: 13px;
//       color: #9ca3af;
//       margin-top: 40px;
//       border-top: 1px solid #e5eaf0;
//       padding-top: 18px;
//       line-height: 1.6;
//     }
//   </style>
// </head>
// <body>

//   <div class="email-wrapper">
//     <div class="email-header">
//       <img src="https://crescentpips.com/ke/assets/images/logo.png" alt="CrescentPips Logo">
//       <h2 class="email-title">Congratulations, Trader of the Week!</h2>
//       <span class="award-badge">🏆 Elite Award</span>
//     </div>

//     <div class="email-body">
//       <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

//       <p>We are excited to celebrate your outstanding performance as our <span class="highlight">Trader of the Week</span>!  
//       While you originally qualified for an <strong>iPhone 16 Pro Max</strong>, you chose to receive your reward in cash — and we’ve made that happen for you. 🎉</p>

//       <div class="transaction-box">
//         <h4>Reward Withdrawal Details</h4>
//         <div class="transaction-row"><span> Traded Amount:</span> <span>KSH959,000</span></div>
//         <div class="transaction-row"><span> Total Withdrawal:</span> <span>KSH70,000</span></div>

//         <div class="transaction-row"><span>Amount Awarded:</span> <span>KSH150,000</span></div>
//         <div class="transaction-row"><span>Status:</span> <span>Completed ✅</span></div>
//         <div class="transaction-row"><span>Date:</span> <span>${new Date().toLocaleDateString()}</span></div>
//         <div class="transaction-row"><span>Reference ID:</span> <span>AWRD-${Math.floor(100000 + Math.random() * 900000)}</span></div>
//       </div>

//       <p>The funds have been credited to your <strong>M-pesa account</strong>as per your withdrawal request.</p>

//       <p>Thank you for your consistency and dedication. Keep trading and keep winning — who knows, you could be our <span class="highlight">next monthly champion</span>! 🚀</p>

//       <a href="https://crescentpips.ltd/dashboard.html" class="cta-button">View My Account</a>
//     </div>

//     <div class="email-footer">
//       <p>This notification was generated from CrescentPips’ secure system.</p>
//       <p>For any questions regarding your award or account, please reach out via your support dashboard.</p>
//     </div>
//   </div>

// </body>
// </html>
// `

















































