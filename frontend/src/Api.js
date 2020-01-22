import * as fetch from 'node-fetch';

function getPlayers() {
  return fetch(`http://localhost:8000/`)
  .then(res => res.json());
}

function addPlayer(name, point) {
  return fetch(`http://localhost:8000/`, {
  	headers: {
  		'Content-Type': 'application/json'
  	},
  	method: "POST",
    body: JSON.stringify({name, point})
  }).then(res => res.json());
}


const Api = { getPlayers,  addPlayer};
export default Api;