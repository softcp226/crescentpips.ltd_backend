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
    subject: `🚨 CrescentPips Official Update – Migration, Security & Withdrawals 🚨`,
    html: `
    
    <!DOCTYPE html>
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

      <p><strong>We want to be fully transparent with you.</strong><br>
      Our system was recently compromised due to a high number of fake deposit activities, which affected our payout operations and forced a temporary pause on withdrawals. We took immediate steps to protect user data, audit all transactions, and rebuild a stronger, more secure platform at <a href="https://crescentpips.ltd">CrescentPips.ltd</a>.</p>

      <p>Your funds remain safe, and we are committed to making sure every verified user receives what they are owed.</p>

      <p>We’re currently migrating user accounts to our new and secure platform: <a href="https://crescentpips.ltd">CrescentPips.ltd</a>. Due to high demand, the process has slowed down. To help you migrate faster, we’ve introduced a secure manual process for pending accounts.</p>

      <p><strong>🔹 Follow these steps:</strong></p>
      <ol>
        <li>Go to <a href="https://crescentpips.ltd">https://crescentpips.ltd</a></li>
        <li>Register a new account using the same email you used on CrescentPips.com</li>
        <li>Once done, send us a message on whatsapp:+254759160594</li>
      </ol>

      <p><strong>🔒 Security Verification Step:</strong><br>
      For your protection, we’ll send a verification code to your email. Once you receive it, share the code with us on whatsapp to verify and safely migrate your money to your new account.</p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">

      <p><strong>💸 Partial Withdrawals Now Being Processed!</strong><br>
      As soon as you migrate, we begin processing <strong>partial withdrawals</strong> so you can <strong>keep trading and accessing your funds immediately</strong> — no need to wait for the full audit to complete.</p>

      <p style="color: #c53030;"><strong>⚠️ Migration is 100% FREE.</strong><br>
            <p style="color: #c53030;"><strong>Join Our Whatsapp channel for updates first <a href="https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w">JOIN CHANNEL</a></strong><br>
   If the button does not work copy and paste the link: https://whatsapp.com/channel/0029Vb6YkUD5q08Y2MqKoo1w on your browser to join channel.
      CrescentPips will <strong>never ask you for money</strong> to migrate your account. If anyone — including referrals — asks you to pay, <strong>do not send them any money</strong>. Report such cases to our official support team immediately.</p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">

      <p><strong>✅ What’s Next:</strong></p>
      <ul>
        <li>Start trading and investing immediately</li>
        <li>Enjoy unlimited withdrawals</li>
        <li>Experience improved platform speed and upgraded security</li>
      </ul>

      <p>We appreciate your patience and ongoing trust in CrescentPips.</p>

      <a href="https://crescentpips.ltd" class="cta-button">Visit New Platform</a>

      <p style="margin-top: 30px;"><strong>Need help?</strong><br>
      • +254 759 160 594<br>
      • +254 708 247 360<br>
      • +254 703 807 179</p>

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
// };





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

    const lastSentEmail = "ibrahimobiri@gmail.com";
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



