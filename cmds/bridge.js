const env = require('dotenv').config();
const ora = require('ora');
const error = require('../utilities/error')
const getBridge = require('../utilities/bridge');
const parseString = require('xml2js').parseString;

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    var host = (args.host) ? args.host : process.env.HUE_BRIDGE_IP;
    const infoXml = await getBridge(host);

    parseString(infoXml, function (err, result) {
      let info = JSON.parse(JSON.stringify(result.root.device));

      spinner.stop();

      console.log(`
        Bridge Information:

        \t Device Type:        ${info[0].deviceType}
        \t IP Address:         ${host}
        \t Name:               ${info[0].friendlyName}
        \t Model:              ${info[0].modelName} ${info[0].modelNumber}
        \t Serial Number:      ${info[0].serialNumber}
      `);
    });

  } catch (err) {
    spinner.stop();

    error(`Unable to connect to bridge at ${host}`, err);
  }
}
