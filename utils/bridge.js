const dotenv = require('dotenv').config();
const axios = require('axios')

module.exports = async () => {
    const result = await axios({
      method: 'get',
      url: 'http://' + process.env.HUE_BRIDGE_IP + '/description.xml',
    });

    return result.data;
}
