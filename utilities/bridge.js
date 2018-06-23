const axios = require('axios')

module.exports = async (host) => {
    const result = await axios({
      method: 'get',
      timeout: 30000,
      url: 'http://' + host + '/description.xml',
  });

  return result.data;
}
