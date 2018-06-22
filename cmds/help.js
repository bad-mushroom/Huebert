const menus = {
  main: `
    huebert [command] <options>

    bridge ............. show information about the connected bridge
    version ............ show package version
    help ............... show help menu for a command`,

  bridge: `
    huebert bridge <options>`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
