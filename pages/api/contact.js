import sendgrid from "@sendgrid/mail";
import userData from "../../constants/data";

require("dotenv").config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: userData.email,
      from: "kevinchaoburner@gmail.com",
      subject: `Message from: ${req.body.name}`,
      html: `
      <h3>Received a message from: ${req.body.email}</h3>
      <br>
      <p>Message: </p>
      <p>${req.body.message}</p>`,
    });
  } catch (error) {
    console.log("Ya caught me.");
    return res.status(error.status || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;
