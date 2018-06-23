const ora = require('ora');
const getLights = require('../utilities/lights');

module.exports = async (args) => {
  const spinner = ora().start();

  let light = (args._[1]) ? args._[1] : null;

  try {
    let lights = await getLights(light);
    let keys = [];

    if (light === null) {
      keys = Object.keys(lights);
    } else {
      keys.push(light);
      lights[light] = lights
    }

    spinner.stop();

    console.log(`
        Lights:`);

    keys.forEach(function(key) {
      console.log(`
        \t ${lights[key].name}
        \t - ID:            ${key}
        \t - Model:         ${lights[key].modelid}
        \t - Type:          ${lights[key].type}
        \t - On/Off:        ${lights[key].state.on ? 'On' : 'Off'}
        \t - Brightness:    ${lights[key].state.bri} `);
    });

  } catch (err) {
    spinner.stop();

    console.error(err);
  }
}
