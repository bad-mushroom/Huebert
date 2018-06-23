const ora = require('ora');
const getLights = require('../utils/lights-list');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const lights = await getLights();
    var keys = Object.keys(lights);

    spinner.stop();

    console.log(``);
    console.log(`Lights: `);
    console.log(``);

    keys.forEach(function(key) {
      console.log(`\t ${lights[key].name}`);
      console.log(`\t  - ID:            ${key}`);
      console.log(`\t  - Model:         ${lights[key].modelid}`);
      console.log(`\t  - Type:          ${lights[key].type}`);
      console.log(`\t  - On/Off:        ${lights[key].state.on ? 'On' : 'Off'}`);
      console.log(`\t  - Brightness:    ${lights[key].state.bri}`);
      console.log(``);
    });
  } catch (err) {
    spinner.stop();

    console.error(err);
  }

}
