// /* eslint-disable import/order */
// /* eslint-disable no-undef */
// /* eslint-disable @typescript-eslint/no-var-requires */
// const redis = require('redis');
// const { promisify } = require('util');

// module.exports = async (req, res) => {
//   const client = redis.createClient(process.env.KV_URL);
//   const setAsync = promisify(client.set).bind(client);

//   try {
//     const newCount = await setAsync('clickCount');
//     res.status(200).send({ newCount });
//   } catch (error) {
//     res.status(500).send({ error: 'Error incrementing count' });
//   }

//   client.quit();
// };

// refer to getCount for proper kv code
