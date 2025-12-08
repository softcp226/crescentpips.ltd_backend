const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
// const { datetime } = require("./model/system-variables");  

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
//    logger: true,
//   debug: true
});



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



let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Official Update – Service Stability Restored🚨`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CrescentPips Official Notice</title>
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

    /* HEADER */
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

    /* BODY */
    .email-body {
      font-size: 16px;
      color: #4a5568;
      line-height: 1.75;
    }
    .email-body a {
      color: #1a3fa0;
      text-decoration: none;
      font-weight: 500;
    }

    /* HIGHLIGHT BLOCK */
    .highlight-box {
      background: #eef3ff;
      padding: 18px 22px;
      border-left: 4px solid #1a3fa0;
      border-radius: 6px;
      margin: 25px 0;
      font-weight: 500;
      color: #1a3fa0;
    }

    /* SECURITY WARNING */
    .security-box {
      background: #fff7e6;
      border-left: 4px solid #d97706;
      padding: 18px 22px;
      border-radius: 6px;
      margin: 28px 0;
      color: #8a6100;
      font-size: 15px;
    }

    /* CTA BUTTON */
    .cta-button {
      display: inline-block;
      margin-top: 28px;
      padding: 14px 28px;
      background: linear-gradient(90deg, #0c0e28, #1a3fa0);
      color: #ffffff;
      border-radius: 8px;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.3px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.04); }
      100% { transform: scale(1); }
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
      <h2 class="email-title">📢 Official Service Restoration Update</h2>
      <p class="sub-title">System Stable • Payments Active • New Communication Channel</p>
    </div>

    <div class="email-body">

      <p>Dear ${userInfo.first_name} ${userInfo.last_name},</p>

      <p>
        We are pleased to inform you that the interruptions experienced earlier due to our WhatsApp support channel being restricted have now been <strong>fully resolved</strong>. 
        All systems, payouts, and support channels are now operating normally.
      </p>

      <div class="highlight-box">
        ✔ Payments have resumed successfully<br>
        ✔ Withdrawals are now being processed normally<br>
        ✔ New official WhatsApp channel is active<br>
        ✔ System stability fully restored
      </div>

      <p>
        If your <strong>VPS has expired</strong>, kindly renew it to avoid delays.  
        If you have a <strong>Treasury clearance</strong> pending, please settle it so your account remains fully active.
      </p>

      <p style="margin-top: 14px;">
        <strong style="color:#0c0e28; font-size:17px;">If you have no pending bills, you can proceed to place your withdrawal now.</strong><br>
        Our payout team is clearing requests in real time.
      </p>

      <p style="margin-top: 25px;">
        🔗 <strong>Join our new official WhatsApp channel:</strong><br>
        <a href="https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w">https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w</a>
      </p>

      <a href="https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w" class="cta-button">
        Join Official WhatsApp Channel
      </a>

      <div class="security-box">
        ⚠ <strong>Security Notice:</strong><br>
        Please ignore any message or broadcast from our old WhatsApp numbers or unverified contacts.  
        CrescentPips will never request payments outside your verified dashboard or official support lines.
      </div>

  <div class="security-box">
        ⚠ <strong>Migration Notice:</strong><br>
       If you had an account on the old platform (crescentpips.com) and your balance has not been migrated to the new system (crescentpips.ltd), please contact on this number <a href='tel:+254 759 160594'>+254 759 160594</a> for assistance.
      </div>

      <p>
        Thank you for your continued trust and cooperation.  
        CrescentPips remains committed to ensuring a secure, transparent and efficient experience for all users.
      </p>

    </div>

    <div class="email-footer">
      This message was sent from CrescentPips' Official Communications Unit.<br>
      If you did not request updates, please disregard this email.
    </div>

  </div>

</body>
</html>

    `



  });
};





// // const users= await Users.find()
// fetch_users=async()=>{
// // const users= [{email:"softcp226@gmail.com", first_name:"chidera", last_name:"texco"}]
//  const users= await Users.find()

// users.forEach(user=> {

//     console.log(user.email)
//         transporter.sendMail(
//       create_mail_options({
//         first_name: user.first_name,
//         last_name: user.last_name,
//         reciever: user.email,
//       }),
//       (err, info) => {
//         if (err) return console.log(`there was an error on the server${err}`);
//         console.log(info);
//         // return res.status(400).json({
//         //   error: true,
//         //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
//         // });
//       },
//     );

  
// });
// }

// fetch_users()





// const fetch_users = async () => {
//   try {
//     const users = await Users.find();

//     for (const user of users) {
//       console.log(`Sending email to: ${user.email}`);

//       transporter.sendMail(
//         create_mail_options({
//           first_name: user.first_name,
//           last_name: user.last_name,
//           reciever: user.email,
//         }),
//         (err, info) => {
//           if (err) {
//             return console.log(`Error sending to ${user.email}: ${err.message}`);
//           }
//           console.log(`Email sent to ${user.email}: ${info.response}`);
//         }
//       );

//       // Wait 10 seconds before continuing to next user
//       await delay(10000);
//     }
//   } catch (err) {
//     console.error('Failed to fetch users or send emails:', err);
//   }
// };
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


// const sendEmail = async(user)=>{
//       transporter.sendMail(
//         create_mail_options({
//           first_name: user.first_name,
//           last_name: user.last_name,
//           reciever: user.email,
//         }),
//         (err, info) => {
//           if (err) {
//             return console.log(`Error sending to ${user.email}: ${err.message}`);
//           }
//           console.log(`Email sent to ${user.email}: ${info.response}`);
//         }
//       );
// }


// const fetch_users = async () => {
//   try {
//     const users = await Users.find();

//     // Find index of the last processed user
//     const startIndex = users.findIndex(
//       (u) => u.email === "sagevyizigiro707@gmail.com"
//     );

//     // Start from the next user
//     const remainingUsers = users.slice(startIndex + 1);

//     for (const user of remainingUsers) {
//       await sendEmail(user);
//       await delay(10000); // Wait 10 seconds
//     }
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };sock@gmail.com

// const emails=["sock@gmail.com"]



const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendEmail = (user) =>
  new Promise((resolve, reject) => {
    transporter.sendMail(
      create_mail_options({
        first_name: user.first_name,
        last_name: user.last_name,
        reciever: user.email,
      }),
      (err, info) => {
        if (err) {
          console.log(`❌ Error sending to ${user.email}: ${err.message}`);
          return reject(err);
        }
        console.log(`✅ Email sent to ${user.email}: ${info.response}`);
        resolve(info);
      }
    );
  });

const fetch_users = async () => {
  try {
    console.log("📥 Fetching users...");
    const users = await Users.find().sort({ _id: 1 });

    console.log(`👥 Total users found: ${users.length}`);

    const lastSentEmail = "khobajustus9@gmail.com:";
    let foundLastSent = false;
    let sendCount = 0;

    for (const user of users) {
      console.log(`🔎 Checking user: ${user.email}`);

      if (!foundLastSent) {
        if (
          user.email &&
          user.email.toLowerCase().trim() === lastSentEmail.toLowerCase().trim()
        ) {
          console.log(`⏭ Found last sent email: ${user.email}`);
          foundLastSent = true;
        }
        continue;
      }

      console.log(`📤 Sending to: ${user.email}`);
      await sendEmail(user);
      sendCount++;

      // Wait after the first email is sent
      await delay(10000);
    }

    if (!foundLastSent) {
      console.log(`❗ "${lastSentEmail}" not found in database. Aborting.`);
    }

    if (sendCount === 0 && foundLastSent) {
      console.log("✅ All emails have already been sent. No remaining users.");
    }
  } catch (err) {
    console.error("🔥 Unexpected error:", err);
  }
};

fetch_users();



