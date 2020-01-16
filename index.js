const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    desc !== 'Invalid breed' ? console.log(desc) : console.log('Invalid breed');

  }
});


