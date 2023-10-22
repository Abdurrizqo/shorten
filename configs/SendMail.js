const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "maude.kassulke99@ethereal.email",
    pass: "sgmQKdRM5BCxUQSKPp",
  },
});

async function sendMail(sendTo, linkConfirmation) {
  const info = await transporter.sendMail({
    from: "Shorten Link ARAA",
    to: sendTo,
    subject: "Account Confirmation",
    html: `<p>this your link konfirmation <a href=${linkConfirmation} target=_blank>HERE</a></p>`,
  });
}

module.exports = { sendMail };
