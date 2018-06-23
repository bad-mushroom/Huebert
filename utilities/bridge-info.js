const parseString = require('xml2js').parseString;

module.exports = async (infoXml, host) => {
    parseString(infoXml, function (err, result) {
      let info = JSON.parse(JSON.stringify(result.root.device));

      console.log(`
        Bridge Information:

        \t Device Type:        ${info[0].deviceType}
        \t IP Address:         ${host}
        \t Name:               ${info[0].friendlyName}
        \t Model:              ${info[0].modelName} ${info[0].modelNumber}
        \t Serial Number:      ${info[0].serialNumber}
      `);
    });
}
