const env = require('dotenv').config();
const ora = require('ora');
const error = require('../utilities/error')
const getBridge = require('../utilities/bridge');
const showBridge = require('../utilities/bridge-info');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    var host = (args.host) ? args.host : process.env.HUE_BRIDGE_IP;
    const infoXml = await getBridge(host);

    showBridge(infoXml);

    spinner.stop();
  } catch (err) {
    spinner.stop();

    error(`Unable to connect to bridge at ${host}`, err);
  }
}
