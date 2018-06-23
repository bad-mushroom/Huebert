const dgram = require('dgram');

module.exports = async () => {

  let packet = [
    'M-SEARCH * HTTP/1.1',
    'HOST:239.255.255.250:1900',
    'MAN:"ssdp:discover"',
    'ST:ssdp:all',
    'MX:1',
    ''
  ].join('\r\n');
  let multicast = '239.255.255.250';
  let client = dgram.createSocket('udp4');
  let message = new Buffer(packet);

   return new Promise(function(resolve, reject) {
      client.bind(function() {
        client.addMembership(multicast);

        var found = [];

        client.on('message', function (msg, rinfo) {
          if (found.indexOf(rinfo.address) === -1) {
            found.push(rinfo.address);
          }
        });

        client.send(message, 0, message.length, 1900, multicast);

        setTimeout(function() {
          client.close();
          resolve(found);
        }, 3000);
      });
  });

}
