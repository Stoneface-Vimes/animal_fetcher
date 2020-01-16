const request = require('request');
const userInput = process.argv[2]; //only grabs the first command line argument
//const key = "7ac35368-a812-41d8-9ad7-be88a9d05784";

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (response.statusCode !== 200) {
    return console.log(`Recived non-200 response code (${response.statusCode}), process will now exit`);
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    return (console.log('Breed not found'));
  }
  console.log(data['0'].description); //general information is stored as an object, inside ['0']
});