// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>CrescentPips Jackpot Award</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
//     body {
//       margin: 0;
//       padding: 0;
//       background-color: #f4f7fa;
//       font-family: 'Poppins', sans-serif;
//     }
//     .email-wrapper {
//       max-width: 650px;
//       margin: 40px auto;
//       background-color: #ffffff;
//       border-radius: 16px;
//       padding: 40px;
//       box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
//       border: 1px solid #e2e8f0;
//     }
//     .email-header {
//       text-align: center;
//       margin-bottom: 30px;
//     }
//     .email-header img {
//       height: 55px;
//     }
//     .email-title {
//       font-size: 26px;
//       font-weight: 600;
//       color: #0c0e28;
//       margin: 20px 0 10px;
//     }
//     .email-subtitle {
//       font-size: 16px;
//       color: #718096;
//       margin-bottom: 20px;
//     }
//     .email-body {
//       font-size: 16px;
//       color: #4a5568;
//       line-height: 1.7;
//     }
//     .highlight-box {
//       background: #f0f4ff;
//       border-left: 4px solid #2c5282;
//       padding: 15px;
//       margin: 20px 0;
//       border-radius: 8px;
//       font-size: 15px;
//     }
//     .highlight {
//       color: #0c0e28;
//       font-weight: 600;
//     }
//     .cta-button {
//       display: inline-block;
//       margin-top: 30px;
//       padding: 14px 28px;
//       background: linear-gradient(90deg, #0c0e28, #1a1c40);
//       color: #ffffff;
//       border-radius: 8px;
//       text-decoration: none;
//       font-weight: 600;
//       font-size: 15px;
//       transition: all 0.3s ease;
//     }
//     .cta-button:hover {
//       background: linear-gradient(90deg, #1a1c40, #0c0e28);
//     }
//     .contact-box {
//       margin-top: 30px;
//       background: #f9fafc;
//       padding: 15px;
//       border-radius: 8px;
//       font-size: 14px;
//     }
//     .email-footer {
//       text-align: center;
//       font-size: 13px;
//       color: #a0aec0;
//       margin-top: 40px;
//       border-top: 1px solid #e2e8f0;
//       padding-top: 20px;
//     }
//   </style>
// </head>
// <body>

//   <div class="email-wrapper">
//     <div class="email-header">
//       <img src="https://crescentpips.com/css/images/IMG-20220829-WA0004~4.jpg" alt="CrescentPips Logo">
//       <h2 class="email-title">🎉 Congratulations! Jackpot Award Credited</h2>
//       <p class="email-subtitle">Your recent trade has unlocked an exclusive reward</p>
//     </div>

//     <div class="email-body">
//       <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

//       <p>We are excited to let you know that during your recent <strong>SureTrade</strong> on <strong>[Date]</strong>, our trading algorithm detected a <strong>jackpot trigger</strong> in your trade execution.</p>

//       <div class="highlight-box">
//         📊 <strong>Trade Reference:</strong> [Trade ID]<br>
//         🏆 <strong>Award Amount:</strong> <span class="highlight">[KSH/USD Amount]</span><br>
//         💼 <strong>Updated Final Balance:</strong> <span class="highlight">[Final Balance Amount]</span>
//       </div>

//       <p>The award has already been <strong>credited directly</strong> to your account and is now reflected in your final balance. You can view these details anytime in your trading dashboard.</p>

//       <a href="https://crescentpips.ltd/login" class="cta-button">View My Account</a>

//       <div class="contact-box">
//         <strong>Need help?</strong><br>
//         📞 +254 703 807 179 | +254 708 247 360 | +254 759 160 594<br>
//         📧 <strong>support@crescentpips.com</strong><br>
//         📢 Join our official WhatsApp channel: <a href="https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w">Click Here</a>
//       </div>
//     </div>

//     <div class="email-footer">
//       <p>This message was sent from CrescentPips' official system. Always contact verified support for help and updates.</p>
//     </div>
//   </div>

// </body>
// </html>





const { diskStorage } = require("multer");
const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

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
    subject: ` Withdrawal Successful`,
    html: `

    
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Withdrawal Completed</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #eef2f7, #f6f9fc);
      font-family: 'Poppins', sans-serif;
    }

    .email-wrapper {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 35px 30px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
      border: 1px solid #e5e7eb;
    }

    .email-header {
      text-align: center;
      margin-bottom: 25px;
    }

    .email-header img {
      height: 45px;
      margin-bottom: 10px;
    }

    .email-title {
      font-size: 24px;
      font-weight: 600;
      color: #111827;
      margin: 15px 0;
    }

    .divider {
      width: 60px;
      height: 4px;
      background: #0c0e28;
      margin: 10px auto 25px;
      border-radius: 5px;
    }

    .email-body {
      font-size: 15px;
      color: #4b5563;
      line-height: 1.7;
    }

    .email-body strong {
      color: #111827;
    }

    .info-box {
      background: #f9fafb;
      padding: 15px 20px;
      border-left: 4px solid #0c0e28;
      border-radius: 8px;
      margin: 20px 0;
      font-size: 15px;
      color: #374151;
    }

    .cta-button {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 22px;
      background-color: #0c0e28;
      color: #ffffff;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
    }

    .email-footer {
      text-align: center;
      font-size: 12.5px;
      color: #9ca3af;
      margin-top: 40px;
      line-height: 1.6;
    }

    .email-footer p {
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <div class="email-wrapper">
    <div class="email-header">
      <img src="https://crescentpips.com/ke/assets/images/logo'.png" alt="Company Logo">
      <h2 class="email-title">Withdrawal Completed</h2>
      <div class="divider"></div>
    </div>

    <div class="email-body">
      <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

      <p>We are pleased to inform you that your withdrawal request of <strong>KSH${userInfo.amount}</strong> has been successfully processed.</p>

      <div class="info-box">
        The funds have been credited to the Mpesa Account details associated with your CrescentPips account.
      </div>

      <p>For more information, you may log in to your dashboard to view your complete transaction history and real-time account updates.</p>

      <a href="https://crescentpips.com/login.html" class="cta-button">View Transaction</a>
    </div>

    <div class="email-footer">
      <p>This is an automated message from the CrescentPips secure notification system.</p>
      <p>If you did not initiate this withdrawal, please disregard this email.</p>
    </div>
  </div>

</body>
</html>
`

  });
};



transporter.sendMail(
      create_mail_options({
        first_name: "Naomi Chepkurui", 
        last_name: "Rotich",
        reciever: "softcp226@gmail.com",
        amount: "116,000",

      }),
      (err, info) => {
        if (err) {
          console.log(`❌ Error sending email ${err.message}`);
        //   return reject(err);
        }
        console.log(`✅ Email sent email ${info.response}`);
        // resolve(info);
      }
    );





























