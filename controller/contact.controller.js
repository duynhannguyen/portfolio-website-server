import { transporter } from "../services/nodemailer.config.js";
import nodemailer from "nodemailer";
import "dotenv/config";
const contactForm = (req, res) => {
  const { name, email, message } = req.body;
  const emailBody = {
    to: "duynhannguyenn@gmail.com",
    subject: `${name} <${email}> has send for you a message`,
    text: `email: ${email}, message: ${message}  `,
  };

  try {
    transporter.sendMail(emailBody, (error, info) => {
      if (error) {
        console.log("error", error);
        console.log("sendMailError", error.message);
        return process.exit(1);
      }
      console.log("Message sent successfully");
      console.log("nodemailer", nodemailer.getTestMessageUrl(info));
    });
    res.status(200).json({
      message: "Send Mail successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Send email fail",
    });
  }
};

const contact = {
  contactForm,
};

export default contact;
