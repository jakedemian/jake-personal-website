/* eslint-disable no-undef */
require('@sendgrid/mail');

let sgMail;
if (process.env.NODE_ENV === 'production') {
  sgMail = require('@sendgrid/mail');
} else {
  sgMail = require('../mocks/sendgrid');
}

module.exports = async (req, res) => {
  try {
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (!sendgridApiKey) {
      throw new Error('SENDGRID_API_KEY was not found.');
    }

    sgMail.setApiKey(sendgridApiKey);

    const { to, from, subject, text } = req.body;

    const msg = {
      to,
      from,
      subject,
      text,
    };

    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).send(error.message);
  }
};
