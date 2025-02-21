/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const edgedb = require('edgedb');

module.exports = async (req, res) => {
  const client = edgedb.createClient();
  console.log('🏀', client);

  const result = await client.query(`select 2 + 2;`);
  console.log(result); // [4]
  return res.status(200).json({ clickCount: { value: 0 } });
};
