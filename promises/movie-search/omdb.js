//will be a module that we will use to interact with the OMDb API in our main index.js file//

const axios = require('axios');



function search(term){
    return axios.get(`http://www.omdbapi.com/?s=${term}&apikey=abd9b3bc`);
}

module.exports = {
    search,
};
