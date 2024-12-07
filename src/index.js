const axios = require('axios');

// Be sure to store your API key in a .env file.
// The .env.sample file shows the required format.
// The package.json has been configured to load the .env file
// when using `npm start`.
// To run a script other than this `index.js` file, we need to start node
// from the project root like
// `node --env-file=.env path/to/script.js`
// (This will be useful for running the solutions.)
const API_KEY = process.env.api_key;

// single location call example
const placeName = 'Great Wall of China';

// Endpoint documentation: https://docs.locationiq.com/reference/search
const BASE_URL = 'https://us1.locationiq.com/v1/search';

// more details about the config structure:
// https://github.com/axios/axios#request-config

// Make a single API call to retrieve the latitude and longitude of
// the Great Wall of China. We'll use this to form the basis of our
// solutions.

axios
  .get(BASE_URL, {
    params: {
      key: API_KEY,
      q: placeName,
      format: 'json',
    },
  })
  .then(response => {
    const { lat, lon } = response.data[0];
    console.log({ lat, lon });
    return;  // as configured, eslint requires a return statement
  })
  .catch(error => {
    console.log(error);
  });
