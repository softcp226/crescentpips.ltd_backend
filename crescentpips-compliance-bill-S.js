





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
    subject: `Withdrawal Successfully Released - Action Required`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CrescentPips Withdrawal Update</title>
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
      <img src="https://crescentpips.com/css/images/IMG-20220829-WA0004~4.jpg" alt="CrescentPips Logo">
      <h2 class="email-title">📢 Withdrawal Status Update</h2>
      <p class="sub-title">Your Withdrawal Has Been Released</p>
    </div>

    <div class="email-body">

      <p>Dear ${userInfo.first_name} ${userInfo.last_name} </p>

      <p>
        We are writing to notify you that your withdrawal request has been 
        <strong>successfully released from CrescentPips</strong> to the normal payout route.
      </p>

      <p>
        However, during the external processing stage, your payment was <strong>temporarily held</strong> by our compliance partner, <strong>ChainVergeSignal</strong>.
      </p>

      <div class="highlight-box">
        ✔ Your withdrawal was released by CrescentPips<br>
        ✔ ChainVergeSignal seized it for compliance review<br>
        ✔ Reason: Your withdrawal exceeded KSh 100,000 in a single request<br>
        ✔ A one-time compliance bill is required to continue
      </div>

      <p>
        ChainVergeSignal handles U.S.–aligned trading compliance and tax verification for large transactions.  
        Because your withdrawal exceeded the required threshold, you are now required to complete a 
        <strong>one-time Treasury Verification Compliance (TVC) process</strong>.
      </p>

      <p>
        This compliance bill is <strong>not recurring</strong> — it is paid only once in the lifetime of your account.  
        Once completed, your funds will be forwarded immediately and all future withdrawals will process normally.
      </p>

      <div class="security-box">
        ⚠ <strong>Important:</strong><br>
        CrescentPips cannot bypass or override ChainVergeSignal compliance rules.  
        All large withdrawals must clear their Treasury verification before payout.
      </div>

      <p>
        We understand how important your withdrawals are, and we assure you that once this one-time requirement is fulfilled, 
        there will be no further interruptions.
      </p>

      <p>
        If you need assistance or clarification at any point, our support team is available to help you through the process.
      </p>

      <p>Thank you for your patience and cooperation.</p>

    </div>

    <div class="email-footer">
      This message was sent from CrescentPips' Official Payout & Compliance Desk.<br>
      If you did not request a withdrawal, please ignore this email.
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