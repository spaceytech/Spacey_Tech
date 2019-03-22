const mailer = require("nodemailer");
require("dotenv").config();
const { welcome } = require("./template");

const getEmailData = (to, name, token, template) => {
  let data = null;
  switch (template) {
    case "welcome":
      data = {
        from: "Spacey <spaceytech.work@gmail.com",
        to,
        subject: `Welcome to Spacey ${name}`,
        html: welcome(name)
      };
      break;
    default:
      data;
  }
  return data;
};

const sendEmail = (to, name, token, type) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "zakeria.hussien@gmail.com",
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mail = getEmailData(to, name, token, type);

  smtpTransport.sendMail(mail, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }

    smtpTransport.close();
  });
};

module.exports = { sendEmail };
