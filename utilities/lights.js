const dotenv = require('dotenv').config();
const axios = require('axios')

module.exports = async () => {
    const result = await axios({
      method: 'get',
      url: 'http://' + process.env.HUE_BRIDGE_IP + '/api/' + process.env.HUE_USER_TOKEN + '/lights',
    });

    return result.data;
}
