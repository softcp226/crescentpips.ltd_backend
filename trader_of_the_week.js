





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
    from: process.env.company_mail,
    to: userInfo.reciever,
    subject: `Trader of the Week Award - Cash Withdrawal`,
   html:`
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Trader of the Week Award - Cash Withdrawal</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f7fb;
      font-family: 'Poppins', sans-serif;
    }
    .email-wrapper {
      max-width: 650px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5eaf0;
    }
    .email-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .email-header img {
      height: 50px;
    }
    .email-title {
      font-size: 26px;
      font-weight: 600;
      color: #0c0e28;
      margin: 25px 0 15px;
    }
    .award-badge {
      display: inline-block;
      background: linear-gradient(90deg, #f59e0b, #fbbf24);
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 20px;
      margin-top: 8px;
    }
    .email-body {
      font-size: 16px;
      color: #444;
      line-height: 1.8;
    }
    .highlight {
      color: #0c0e28;
      font-weight: 600;
    }
    .transaction-box {
      background-color: #f9fafc;
      border: 1px solid #e5eaf0;
      border-radius: 12px;
      padding: 20px;
      margin: 25px 0;
    }
    .transaction-box h4 {
      margin: 0 0 15px;
      font-size: 16px;
      font-weight: 600;
      color: #0c0e28;
    }
    .transaction-row {
      display: flex;
      justify-content: space-between;
      margin: 6px 0;
      font-size: 15px;
      color: #555;
    }
    .transaction-row span:first-child {
      font-weight: 500;
      color: #333;
    }
    .cta-button {
      display: inline-block;
      margin-top: 30px;
      padding: 14px 28px;
      background-color: #0c0e28;
      color: #ffffff;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      transition: background 0.3s ease;
    }
    .cta-button:hover {
      background-color: #1a1c40;
    }
    .email-footer {
      text-align: center;
      font-size: 13px;
      color: #9ca3af;
      margin-top: 40px;
      border-top: 1px solid #e5eaf0;
      padding-top: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <div class="email-wrapper">
    <div class="email-header">
      <img src="https://crescentpips.com/ke/assets/images/logo'.png" alt="CrescentPips Logo">
      <h2 class="email-title">Congratulations, Trader of the Week!</h2>
      <span class="award-badge">🏆 Elite Award</span>
    </div>

    <div class="email-body">
      <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

      <p>We are excited to celebrate your outstanding performance as our <span class="highlight">Trader of the Week</span>!  
      While you originally qualified for an <strong>iPhone 16 Pro Max</strong>, you chose to receive your reward in cash — and we’ve made that happen for you. 🎉</p>

      <div class="transaction-box">
        <h4>Reward Withdrawal Details</h4>
        <div class="transaction-row"><span>Traded Amount:</span> <span>KSH5,287,000</span></div>
        <div class="transaction-row"><span>Total Withdrawal:</span> <span>KSH112,000</span></div>
        <div class="transaction-row"><span>Amount Awarded:</span> <span>KSH150,000 + 50,000</span></div>
        <div class="transaction-row"><span>Status:</span> <span>Completed ✅</span></div>
        <div class="transaction-row"><span>Date:</span> <span>${new Date().toLocaleDateString()}</span></div>
        <div class="transaction-row"><span>Reference ID:</span> <span>AWRD-${Math.floor(100000 + Math.random() * 900000)}</span></div>
      </div>

      <p>The funds have been credited to your <strong>M-Pesa account</strong> as per your withdrawal request.</p>
      <p>The funds have been credited to your <strong>M-Pesa account</strong> as per your withdrawal request.</p>

      <pWe’ve credited an extra KSh50,000 to your account in recognition of your outstanding performance — truly the best of the best so far 🚀</p>

      <a href="https://crescentpips.ltd/dashboard.html" class="cta-button">View My Account</a>
    </div>

    <div class="email-footer">
      <p>This notification was generated from CrescentPips’ secure system.</p>
      <p>For any questions regarding your award or account, please reach out via your support dashboard.</p>
    </div>
  </div>

</body>
</html>
`

  });
}




transporter.sendMail(
      create_mail_options({
        first_name: "Caleb", 
        last_name: "Gitonga",
        reciever: "softcp226@gmail.com",
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























// html:`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>2nd Top Trader of the Week - Reward</title>
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
//       font-size: 24px;
//       font-weight: 600;
//       color: #0c0e28;
//       margin: 25px 0 15px;
//     }
//     .award-badge {
//       display: inline-block;
//       background: linear-gradient(90deg, #3b82f6, #2563eb);
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
//       background-color: #2563eb;
//       color: #ffffff;
//       border-radius: 8px;
//       text-decoration: none;
//       font-weight: 600;
//       font-size: 15px;
//       transition: background 0.3s ease;
//     }
//     .cta-button:hover {
//       background-color: #1e40af;
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
//       <h2 class="email-title">Congratulations, 2nd Top Trader of the Week!</h2>
//       <span class="award-badge">🥈 Silver Award</span>
//     </div>

//     <div class="email-body">
//       <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

//       <p>Your trading performance this week has been outstanding, earning you the title of our <span class="highlight">2nd Top Trader of the Week</span>!  
//       As recognition of your achievement, we are delighted to award you with a <span class="highlight">cash prize of KSh 100,000</span>. 🎉</p>

//       <div class="transaction-box">
//         <h4>Reward Details</h4>
//         <div class="transaction-row"><span>Traded Amount: KSH725,000 </span></div>
//         <div class="transaction-row"><span>Total withdrawal: KSH12,000 </span></div>
//         <div class="transaction-row"><span>Prize Amount:</span> <span>KSh 100,000</span></div>
//         <div class="transaction-row"><span>Status:</span> <span>Processed ✅</span></div>
//         <div class="transaction-row"><span>Date:</span> <span>${new Date().toLocaleDateString()}</span></div>
//         <div class="transaction-row"><span>Reference ID:</span> <span>AWRD-${Math.floor(200000 + Math.random() * 800000)}</span></div>
//       </div>

//       <p>The funds have been credited to your registered withdrawal account successfully.</p>

//       <p>We are proud of your consistency and dedication — and we believe the <span class="highlight">#1 spot</span> could be yours next week! 🚀</p>

//       <a href="https://crescentpips.ltd/dashboard.html" class="cta-button">View My Account</a>
//     </div>

//     <div class="email-footer">
//       <p>This message was generated by CrescentPips’ secure system.</p>
//       <p>If you have any questions, please reach out to our support team through your dashboard.</p>
//     </div>
//   </div>

// </body>
// </html>
// `















































