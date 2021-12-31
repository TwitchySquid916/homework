const omdb = require('./omdb');

//omdb.search('Lion')
/*.then(
    (axiosResults)=> {
        let movies = axiosResults.data.Search;
        return movies;
    }
)
.then(
    (movies)=> {
        for(let i=0; i < 3 ; i++){
            console.log(movies[i].Title + " " + movies[i].Year);
        }
        let totalResults = "Total Results: " + axiosResponse.data.totalResults
        console.log(totalResults);
    }             
)
.catch(
    (error)=>{
        console.log(error);
    }
)
*/

const omdb = require("./omdb");
​
function run() {
  omdb.search('star')
    .then(
      axiosResponse => {
        for (let i = 0; i < 3; i++){
          let movie = axiosResponse.data.Search[i];
          console.log(movie.Title + " " + movie.Year)
        }
​
        // Total Results: 508
        console.log("Total Results: " + axiosResponse.data.totalResults);
      }
    )
}
​
run();
