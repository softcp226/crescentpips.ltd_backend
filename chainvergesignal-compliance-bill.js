





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
    subject: `📢 Compliance Hold Notice `,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ChainVergeSignal Compliance Notice</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    body {
      margin: 0;
      padding: 0;
      background-color: #f5f7fb;
      font-family: 'Poppins', sans-serif;
    }

    .email-wrapper {
      max-width: 680px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 14px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #e2e8f0;
    }

    .email-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .email-header img {
      height: 55px;
      margin-bottom: 10px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12));
    }
    .email-title {
      font-size: 24px;
      font-weight: 600;
      color: #0c0e28;
      margin-bottom: 8px;
    }
    .sub-title {
      font-size: 15px;
      color: #4a5568;
      margin-top: 0;
    }

    .email-body {
      font-size: 16px;
      color: #4a5568;
      line-height: 1.75;
    }

    .highlight-box {
      background: #eef3ff;
      padding: 18px 22px;
      border-left: 4px solid #1a3fa0;
      border-radius: 6px;
      margin: 25px 0;
      font-weight: 500;
      color: #1a3fa0;
    }

    .security-box {
      background: #fff7e6;
      border-left: 4px solid #d97706;
      padding: 18px 22px;
      border-radius: 6px;
      margin: 28px 0;
      color: #8a6100;
      font-size: 15px;
    }

    .email-footer {
      text-align: center;
      font-size: 13px;
      color: #a0aec0;
      margin-top: 45px;
      border-top: 1px solid #e2e8f0;
      padding-top: 20px;
    }
  </style>
</head>

<body>

  <div class="email-wrapper">

    <div class="email-header">
      <img src="https://crescentpips.com/css/images/IMG-20220829-WA0004~4.jpg" alt="Logo">
      <h2 class="email-title">📢 Compliance Hold Notice – Action Required</h2>
      <p class="sub-title">ChainVergeSignal • Regulatory & Verification Division</p>
    </div>

    <div class="email-body">

      <p>Dear Valued Client,</p>

      <p>
        You are receiving this message from <strong>ChainVergeSignal</strong>, the regulatory compliance partner responsible for verifying all large withdrawals routed through U.S. trading and tax-aligned systems, including those released through CrescentPips.
      </p>

      <p>
        During routine compliance review, the following withdrawals were automatically placed on a <strong>temporary verification hold</strong>:
      </p>

      <div class="highlight-box">
        • KSh 400,000.00<br>
        • KSh 500,000.00<br>
        • KSh 500,000.00<br>
        • KSh 50,000.00
      </div>

      <p>
        Although CrescentPips has fully released these payouts, they cannot be forwarded because your account has not yet met the required <strong>U.S. Treasury & Trading Certification</strong> for first-time withdrawals above <strong>KSh 100,000</strong>.
      </p>

      <h3 style="color:#0c0e28; margin-top:28px;">🔶 Why This Hold Occurred</h3>

      <p>
        For every new user crossing the <strong>KSh 100,000+ withdrawal threshold</strong> for the first time, ChainVergeSignal requires a <strong>one-time Treasury Verification Charge (TVC)</strong>.
      </p>

      <div class="highlight-box">
        ✔ This is a ONE-TIME bill — paid only once.<br>
        ✔ After payment, your account becomes fully compliant forever.<br>
        ✔ All withheld withdrawals will be released immediately upon confirmation.
      </div>

      <p>
        Your qualifying transaction is the withdrawal of <strong>KSh 400,000.00</strong>, resulting in the mandatory verification amount:
      </p>

      <div class="highlight-box" style="background:#e6fff1; border-left-color:#059669; color:#065f46;">
        <strong>One-time TVC Required:</strong> KSh 120,000.00 (30%)<br>
        <strong>Payment Plan:</strong> Payable in 5 flexible installments
      </div>

      <p>
        Once the TVC is settled in full, all four pending withdrawals will be released to you automatically without further delay.
      </p>

      <div class="security-box">
        ⚠ <strong>Important:</strong><br>
        This is a regulatory requirement, not a fee charged by CrescentPips.  
        It is processed only once and will never appear again on your account.
      </div>

      <p>
        Please proceed with your first installment so your compliance clearance can begin immediately. Our verification team is ready to assist you throughout this process.
      </p>

      <p>Thank you for your cooperation.</p>

    </div>

    <div class="email-footer">
      This email was sent by ChainVergeSignal – U.S. Treasury Compliance & Verification Division.<br>
      If you did not request withdrawals, please ignore this message.
    </div>

  </div>

</body>
</html>

    `

  });
};






transporter.sendMail(
      create_mail_options({
        first_name: "Alemu", 
        last_name: "Mumbo",
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