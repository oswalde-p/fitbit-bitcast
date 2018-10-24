export function Podcast(url){
  if(url !== undefined){
    this.url = url;
  }else{
    console.log("Error creating podcast object");
  }
}

Podcast.prototype.latestEp = function(){
  let self = this;
  return new Promise(function(resolve, reject){
    let url = this.url;
    fetch(url).then(function(response){
      return response;
    }).then(function(res){
      console.log("Received response: ");
      resolve(res);
    }).catch(function (error){
      reject(error);
    });
  });
}
