/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createClient } = require('@vercel/kv');

module.exports = async (req, res) => {
  console.log(process.env.SENDGRID_API_KEY);
  const clicks = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  const clickCount = await clicks.hgetall('clickCount');
  return res.status(200).json({ clickCount });
};
