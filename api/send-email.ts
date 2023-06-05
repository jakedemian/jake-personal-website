/* eslint-disable @typescript-eslint/no-var-requires */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  const { to, from, subject, text, html } = req.body;

  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).send('Error sending email');
  }
};
