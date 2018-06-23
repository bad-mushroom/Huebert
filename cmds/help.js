const menus = {
  main: `
    Usage: huebert [command] <options>

    \t bridge ............. show information about the connected bridge
    \t lights ............. list lights connected to bridge
    \t version ............ show package version
    \t help ............... show help menu for a command`,

  bridge: `

    Show technical information on the Phillips Hue bridge.

    Usage: huebert bridge <options>

    Options:
    \t --host=[=HOST]                       Specify a host, overriding env setting
    \t --discover                           Attempt to search network for available bridges

    Examples:
    \t huebert bridge                        Connect to bridge at default address (set in .env)
    \t huebert bridge --host=1.2.3.4         Connect to bridge at address 1.2.3.4
    \t huebert bridge --discover             Search for bridge(s)
    `,

  lights: `
    Usage: huebert lights <id> <options>

    Examples:
    \t huebert lights 1 .................. Show details for light #1
    \t huebert lights 2 --on ............. Turn light #2 on
    \t huebert lights 2 --off ............ Turn light #2 off`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
