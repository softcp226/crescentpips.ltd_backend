





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
    subject: `Treasury Settlement Fee Notice`,
// html:`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Treasury Settlement Fee Notice</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
//     body {
//       margin: 0;
//       padding: 0;
//       background-color: #f6f9fc;
//       font-family: 'Poppins', sans-serif;
//     }
//     .email-wrapper {
//       max-width: 640px;
//       margin: 40px auto;
//       background-color: #ffffff;
//       border-radius: 12px;
//       padding: 30px;
//       box-shadow: 0 4px 10px rgba(0,0,0,0.06);
//       border: 1px solid #e6e6e6;
//     }
//     .email-header {
//       text-align: center;
//       margin-bottom: 25px;
//     }
//     .email-header img {
//       height: 42px;
//     }
//     .email-title {
//       font-size: 22px;
//       font-weight: 600;
//       color: #2c3e50;
//       margin: 18px 0 12px;
//     }
//     .email-body {
//       font-size: 16px;
//       color: #555;
//       line-height: 1.7;
//     }
//     .highlight-box {
//       background-color: #f1f5ff;
//       border: 1px solid #d6e0ff;
//       border-radius: 8px;
//       padding: 15px 20px;
//       margin: 20px 0;
//       font-size: 15px;
//       color: #2c3e50;
//     }
//     .cta-button {
//       display: inline-block;
//       margin-top: 25px;
//       padding: 12px 24px;
//       background-color: #0c0e28;
//       color: #ffffff !important;
//       border-radius: 6px;
//       text-decoration: none;
//       font-weight: 500;
//     }
//     .email-footer {
//       text-align: center;
//       font-size: 13px;
//       color: #999;
//       margin-top: 40px;
//     }
//   </style>
// </head>
// <body>
//   <div class="email-wrapper">
//     <div class="email-header">
//       <img src="https://crescentpips.com/ke/assets/images/logo'.png" alt="Company Logo">
//       <h2 class="email-title">Treasury Settlement Fee Required</h2>
//     </div>

//     <div class="email-body">
//       <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

//       <p>We are contacting you regarding your <strong>Account</strong> previously registered under <strong>CrescentPips.com</strong>, which has now been securely migrated to our upgraded trading infrastructure at <strong>CrescentPips.ltd</strong>.</p>

//       <p>Your recent withdrawal request of <strong>KSH3,500</strong> has been flagged for <strong>Treasury Settlement Clearance</strong>. As an old user, your trades and withdrawals are routed through a dedicated liquidity pool, which requires a one-time <strong>Settlement Fee</strong> to finalize transfer under the new system.</p>

//       <div class="highlight-box">
//         <p><strong>Account:</strong> US-689055406eda376d1fd7e3bb</p>
//         <p><strong>Settlement Fee:</strong> KSH5,000</p>
//         <p><strong>Status:</strong> Pending — Awaiting clearance</p>
//       </div>

//       <p>Once the fee is settled, your withdrawal will be  cleared and released and other withdrawals wont delay.  
//       To offset this charge, <strong>KSh 500 will be automatically credited back to your M-Pesa wallet within 15 minutes of confirmation</strong>.</p>

//       <p>Kindly ensure this settlement is completed within the next <strong>7 days</strong> to avoid your withdrawal request being placed on hold.</p>
//             <p><strong>Note:</strong> The treasury bill <strong>is credited directly to your trading account</strong> and remain fully withdrawable. </p>


//       <a href="https://crescentpips.ltd/dashboard.html" class="cta-button">Settle Treasury Fee</a>
//     </div>

//     <div class="email-footer">
//       <p>This message was issued by CrescentPips Treasury Desk. If you have already completed this settlement, kindly disregard this notice.</p>
//     </div>
//   </div>
// </body>
// </html>

// `
    html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Action Required – Treasury Settlement Fee</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f7f9fc;
      font-family: Arial, Helvetica, sans-serif;
    }
    .email-wrapper {
      max-width: 640px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      border: 1px solid #e5e5e5;
    }
    .email-header {
      text-align: center;
      margin-bottom: 25px;
    }
    .email-header img {
      height: 40px;
    }
    .email-title {
      font-size: 22px;
      font-weight: bold;
      color: #2c3e50;
      margin: 15px 0 5px;
    }
    .email-body {
      font-size: 16px;
      color: #444;
      line-height: 1.6;
    }
    .highlight {
      background: #f0f4ff;
      padding: 12px 18px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #3c5dd9;
      font-size: 15px;
    }
    .cta-button {
      display: inline-block;
      margin-top: 25px;
      padding: 14px 24px;
      background-color: #0c0e28;
      color: #ffffff !important;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
    }
    .email-footer {
      text-align: center;
      font-size: 13px;
      color: #888;
      margin-top: 40px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-header">
      <img src="https://crescentpips.com/ke/assets/images/logo'.png" alt="CrescentPips Logo" />
      <h2 class="email-title">Treasury Settlement Fee Still Required</h2>
    </div>

    <div class="email-body">
      <p>Dear <strong>Naomi Wambui</strong>,</p>

      <p>We acknowledge receipt of your recent deposit, which has been credited directly to your trading account. Please note, however, that this deposit was not processed toward the <strong>Treasury Settlement Fee</strong> required for your current pending withdrawal and for other withdrawals that would be processed in the future.</p>

      <div class="highlight">
        Account: <strong>VIP-689055406eda376d1fd7e3bb</strong><br>
        Settlement Fee: <strong>KSh 10,000</strong><br>
        Status: <strong>Still Pending</strong>
      </div>

      <p>To assist and encourage smooth processing, the Treasury Desk has approved a special <strong>KSH10,000 Bonus</strong> which will be added to your balance immediately after the Settlement Fee is cleared. this extra KSH10,000 has been added to your profit loss section and would be added to final balance upon settlement</p>

      <p>This ensures you do not lose value and remain eligible for your scheduled withdrawal along with other previous VIP clients.</p>

      <p><strong>Note:</strong> All deposits made are always credited to your trading account and remain fully withdrawable. The Treasury Settlement Fee is a separate compliance-linked requirement for old VIP user's withdrawals. and would also be added to your balance after activation and it remains fully withdrawable</p>

      <a href="https://crescentpips.ltd" class="cta-button">Settle Treasury Fee Now</a>
    </div>



    <div class="highlight">
  <h3 style="margin:0; font-size:16px; color:#2c3e50;">Treasury Payment Instructions</h3>
  <p style="margin:8px 0 0; font-size:15px; color:#444;">
    Please complete your Treasury Settlement Fee payment via M-Pesa using the details below:
  </p>
  <p style="margin:10px 0; font-size:15px; line-height:1.5; color:#000;">
    Name: <strong>John Masheti</strong><br>
    Number: <strong>0792 200 622</strong><br>
    Amount: <strong>KSH10,000</strong>
  </p>
  <p style="margin:8px 0 0; font-size:14px; color:#444;">
    After payment, kindly share the confirmation code with our support desk to activate clearance.
  </p>
</div>



    <div class="email-footer">
      <p>This message was issued by CrescentPips Treasury Desk.<br>
      If you have already completed this settlement, please disregard this notice.</p>
    </div>
  </div>
</body>
</html>
`
  });
}




transporter.sendMail(
      create_mail_options({
        first_name: "Naomi", 
        last_name: "Wambui",
        reciever: "naodebs@gmail.com",
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