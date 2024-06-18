const request = require("request");

const service = async (url, res) => {
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, response, body) => {
      if (error) {
        console.log("Error while making request:", error);
        if (!res.headersSent) {
          res.status(404).send({
            status: false,
            code: 404,
            message: error.message,
          });
        }
        return reject(error);
      }

      if (response.statusCode !== 200) {
        if (!res.headersSent) {
          res.status(response.statusCode).send({
            status: false,
            code: response.statusCode,
            message: "Failed to fetch data!",
          });
        }
        return reject(new Error("Failed to fetch data"));
      }

      resolve(body);
    });
  });
};

module.exports = service;
