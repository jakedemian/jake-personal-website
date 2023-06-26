/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('child_process');
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const deviceIp = argv.device;

const command = `adb connect ${deviceIp} && adb reverse tcp:3000 tcp:3000`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
