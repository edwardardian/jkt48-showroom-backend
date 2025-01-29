const request = require("request");

const service = async (url) => {
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, response, body) => {
      if (error) {
        console.error("Error while making request:", error.message);
        return resolve(null);
      }

      if (response.statusCode !== 200) {
        console.error("Failed to fetch data:", response.statusCode);
        return resolve(null);
      }

      resolve(body);
    });
  });
};

module.exports = service;
