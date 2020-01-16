const request = require('request');
//const key = "7ac35368-a812-41d8-9ad7-be88a9d05784";

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return callback(error = response.statusCode, desc = null);
    }
    const data = JSON.parse(body);

    if (data.length !== 0) {
      return callback(error = null, desc = data['0'].description);
    } else {
      return callback(error = null, desc = 'Invalid breed');
    }
  });
};

module.exports = { fetchBreedDescription };