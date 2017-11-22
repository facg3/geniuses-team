var response = {name: ""};
(function () {
    var url = "";
    addListener("generate", 'click', function () {
    event.preventDefault() ;
      url = urlgenerator();
      while(response.name === "") {
      fetch(url, function () {
        // if(document.getElementById("name").innerHTML != '')
        //// Add more if there is more time
        document.getElementById("name").innerHTML = response.name;
        if(document.getElementById("gender").innerHTML != '')
          document.getElementById("gender").innerHTML = response.gender;
          if(document.getElementById("title").innerHTML != '')
        document.getElementById("title").innerHTML = response.title;
        console.log(response);
      });
    }
  });

}) ();

function urlgenerator() {
  var domainGot = "https://anapioficeandfire.com/api/characters/";
  var num = Math.floor(Math.random()*2100+1);
  return domainGot + num;
}

function fetch (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      callback(response);
    }
    else {
      console.log('Status Code: ' + xhr.status);
    }
  });
  xhr.open('GET', url);
  xhr.send();
}

function addListener (id, eventName, callback) {
  document.getElementById(id).addEventListener(eventName, callback);//3callback
}
