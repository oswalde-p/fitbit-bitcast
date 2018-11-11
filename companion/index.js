import {settingsStorage} from "settings";
import {Podcast} from "./podcast.js";

function testFetch() {
    let url = "https://httpbin.org/get/";
    let headers = {
        "content-type": "application/json"
    };
    let opts = {
        headers: headers,
        mode: "no-cors"
    };

    fetch(url, opts).then(function (response) {
        console.log(response);
    }).catch(function (reason) {
        console.log("Error reading data from " + url);
        console.log(reason);
    });
}

// maybe can't make request straight away??
setTimeout(testFetch, 2000);

/*
try {
    let urls = JSON.parse(settingsStorage.getItem("podList"));
}catch (TypeError){
  console.log("Error: no podcast list found in Settings");

}


console.log(typeof urls);
let tcgteUrl = urls[0].name; //should be https://feeds.feedburner.com/24cast



console.log("Creating podcast object from: " + tcgteUrl);
let tcgte = new Podcast(tcgteUrl);

console.log("Attempting to fetch data from " + tcgte.url);
tcgte.latestEp().then(function(response){
  console.log(response);
}).catch(function (e){
  console.log("error!");
  console.log(e);
});


fetch("https://itunes.apple.com/lookup?id=909253&entity=album").then(function (response){
  console.log(response);
});




settingsStorage.onchange = function(evt){
  console.log("key: " + evt.key);
  console.log("new value: " + evt.newValue);
};

*/