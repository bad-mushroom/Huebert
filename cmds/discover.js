const ora = require('ora');
const error = require('../utilities/error')
const getBridge = require('../utilities/bridge');
const discoverBridge = require('../utilities/discover');

const showBridge = require('../utilities/bridge-info');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    let devices = await discoverBridge();

    var fetchBridge = function (host) {
      return new Promise(function (resolve, reject) {
          getBridge(host).then(function(bridge) {
              resolve(bridge);
          }).catch(function(err) {
              // Not a bridge
          });

      });
   };

   for (let i = 0; i < devices.length; i++) {
     fetchBridge(devices[i]).then(function(bridge) {
         showBridge(bridge, devices[i]);
     });

    }

    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
    error(`Unable to locate any bridges`, err);
  }
}
