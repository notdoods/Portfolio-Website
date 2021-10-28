import nodemailer from "nodemailer";
import userData from "../../constants/data";

export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      //type: "OAuth2",
      user: "kevinchaoburner@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
      //clientID: process.env.CLIENT_ID,
      //clientSecret: process.env.CLIENT_SECRET,
      //refreshToken: process.env.REFRESH_TOKEN,
      //accessToken: process.env.ACCESS_TOKEN,
    },
    secure: true,
  });

  const mailData = {
    from: "kevinchaoburner@gmail.com",
    to: userData.email,
    subject: `Message from ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else {
      console.log(info);
    }
  });
}
