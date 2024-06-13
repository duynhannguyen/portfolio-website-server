import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN,
    pass: process.env.PASSWORD,
  },
});
export const options = {
  from: "Sender",
  to: "Receiver",
  subject: "Contact Message0",
  html: <p> Hello </p>,
};
