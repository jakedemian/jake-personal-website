/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

module.exports = async (req, res) => {
  const greeting = await get('clickCount');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  console.log(greeting);
  return 1000;
};

// module.exports = async (req, res) => {
//   const clicks = createClient({
//     url: process.env.KV_REST_API_URL,
//     token: process.env.KV_REST_API_TOKEN,
//   });

//   const clickCount = await clicks.hgetall('clickCount');
//   return res.status(200).json({ clickCount });
// };
