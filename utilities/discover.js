const axios = require('axios')

module.exports = async () => {

    var client = dgram.createSocket("udp4");
    client.setBroadcast(true);
    client.send(message, 0, message.length, 41234, "239.255.255.250");
    console.log(message);
}
