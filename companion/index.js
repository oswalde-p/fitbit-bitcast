import {settingsStorage} from "settings";
import {Podcast} from "./podcast.js";

let urls = JSON.parse(settingsStorage.getItem("podList"));
console.log(typeof urls);
let tcgteUrl = urls[0].name;


console.log("Creating podcast object from: " + tcgteUrl);
let tcgte = new Podcast(tcgteUrl);
console.log("Success!");

console.log("Attempting to fetch data from " + tcgte.url);
tcgte.latestEp().then(function(response){
  console.log(response);
}).catch(function (e){
  console.log("error!");
  console.log(e);
});


fetch("https://itunes.apple.com/lookup?id=909253&entity=album").then(function (response){
  console.log(response;
});




settingsStorage.onchange = function(evt){
  console.log("key: " + evt.key);
  console.log("new value: " + evt.newValue);
}
