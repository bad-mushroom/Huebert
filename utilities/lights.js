const dotenv = require('dotenv').config();
const axios = require('axios')

module.exports = async (light) => {
    let id = (light) ? '/' + light : '';
    
    const result = await axios({
      method: 'get',
      url: 'http://' + process.env.HUE_BRIDGE_IP + '/api/' + process.env.HUE_USER_TOKEN + '/lights' + id,
    });

    return result.data;
}
