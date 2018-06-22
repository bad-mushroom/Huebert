const ora = require('ora');
const getBridge = require('../utils/bridge');
const parseString = require('xml2js').parseString;

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const infoXml = await getBridge();

    parseString(infoXml, function (err, result) {
      var info = JSON.parse(JSON.stringify(result.root.device));

      spinner.stop();

      console.log(``);
      console.log(`Bridge Information: `);
      console.log(``);
      console.log(`\t Device Type:        ${info[0].deviceType}`);
      console.log(`\t Name:               ${info[0].friendlyName}`);
      console.log(`\t Model:              ${info[0].modelName} ${info[0].modelNumber}`);
      console.log(`\t Serial Number:      ${info[0].serialNumber}`);
    });

  } catch (err) {
    spinner.stop();

    console.error(err);
  }
}
