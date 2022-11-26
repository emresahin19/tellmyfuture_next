import axios from "axios";

console.log(data);
export default function handler(req, res) {
  const mon = 1;
  const d = 1;
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
    return getArtist(res.data[0].split("/")[2]);
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