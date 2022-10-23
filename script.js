// Api calling 

const latestApi ="https://api.themoviedb.org/3/movie/popular?api_key=5c68556177f5ba7bc6156c87d92d83da&language=en-US&page=1"

const movieListingSection=document.getElementById(
    "#movie-listing-section"
);

console.log()


let latestApiResponse = []; //response we only get in a blank array
fetch(latestApi)  // fetch Api return promise
.then(response => response.json())
.then((json )=> latestApiResponse.push(json.results));  // to check 
console.log(latestApiResponse);

// 
