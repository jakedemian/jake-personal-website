/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// const { createClient } = require('@vercel/kv');

module.exports = async (req, res) => {
  // const clicks = createClient({
  //   url: process.env.KV_REST_API_URL,
  //   token: process.env.KV_REST_API_TOKEN,
  // });

  const { clicksToAdd } = req.body;

  if (typeof clicksToAdd !== 'number' || !Number.isInteger(clicksToAdd)) {
    throw new TypeError('clicksToAdd must be an integer');
  }

  if (clicksToAdd <= 0) {
    throw new RangeError('clicksToAdd must be greater than 0');
  }

  try {
    // await clicks.hincrby('clickCount', 'value', clicksToAdd);
    res.status(200).send({ message: 'ok.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: 'An error occurred while updating the click count.' });
  }
};
