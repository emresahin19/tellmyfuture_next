import axios from "axios";
var moviesByDate = [];
var movieCounter = 0;
// which actor borned in your birthday
function getWhichActor(mon, d) {
  var options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/actors/list-born-today',
    params: {month: mon, day: d},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'fbbaa1725emshe440a118b86eefap139fc0jsnef45674da687'
    }
  };
  
  axios.request(options).then(async (res) => {
    getArtist(res.data[0].split("/")[2]);
  }).catch((err) =>  {
      console.error(err);
  });
}
function getArtist(id){
  var options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
    params: {nconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'fbbaa1725emshe440a118b86eefap139fc0jsnef45674da687'
    }
  };
  
  axios.request(options).then((res) => {
    console.log(res.data.name + ' was born same day with you!');
  }).catch((err) =>  {
    console.error(err);
  });
}
// endof which actor borned in your birthday

//get movie
async function getMoive(page, year){
  var api_key = "c71a84891365ebe5ddf2ade7ce653c73",
      base_uri = "https://api.themoviedb.org/3/",
      searchkey = "search/movie?api_key=";
  var url = base_uri + searchkey + api_key + '&query=' + year + '&page=' + page + '&year=' + year + '';

  await axios.request(url).then(async (res) => {
    var movies = res.data.results;
    movieCounter = res.data.total_pages;
    movies.forEach(item => {
      moviesByDate.push({
        name: item.original_title,
        date: item.release_date
      })
    })
  }).catch((err) =>  {
      console.error(err);
  });
}
//endof get movie

//nba match
function getNba(birthday){
    var options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games/date/' + birthday,
        headers: {
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
          'x-rapidapi-key': 'fbbaa1725emshe440a118b86eefap139fc0jsnef45674da687'
        }
      };
      
      axios.request(options).then((res) => {
          var games = res.data.api.games;
          games.forEach(game => {
            var gameDay = (game.endTimeUTC).split("-")[0] + '-' + 
                        (game.endTimeUTC).split("-")[1] + '-' + 
                        (game.endTimeUTC).split("-")[2].substring(0,2);
            if(gameDay == birthday){
                console.log(game);
                let team1 = game.hTeam.fullName + '(' + game.hTeam.shortName + ')',
                    team2 = game.vTeam.fullName + '(' + game.vTeam.shortName + ')',
                    score = game.hTeam.score.points + '-' + game.vTeam.score.points;
                console.log('team1: ' + team1 + '|| team2: ' + team2 + '|| score: ' + score);
            }
          })
          
      }).catch((err) => {
          console.error(err);
      });
}
//endof nba match


export default async function Birthday (props){
    var birthDate = props.year + '-' + props.month + '-' + props.day;
    var page=0;
    var finish = true;
    //getNba(birthDate);
    //getWhichActor(props.month, props.day);
    //await getMoive(1, props.year);

    // await moviesByDate.forEach(item => {
    //     page++;
    //     if(item.date == birthDate){
    //         console.log('Your birthday film is ' + item.name);
    //         finish = false;
    //     }
    //     else if(finish && page < movieCounter){
    //         getMoive(page, props.year);
    //     }
    // });
    // if(finish){
    //     console.log('There is no movie at your birthday');
    // }
}