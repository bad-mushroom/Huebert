const minimist = require('minimist')
const error = require('./utilities/error')

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'

  switch (cmd) {
    case 'bridge':
      require('./cmds/bridge')(args)
      break;

    case 'lights':
      require('./cmds/list')(args)
      break;

    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break

    default:
      error(`
          "${cmd}" is not a valid command!
      `)
      break;
  }
}
