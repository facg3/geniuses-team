(function() {

    var photo = getId("photo"),
      name = getId("name"),
      gender = getId("gender"),
      title = getId("title"),
      characters = [];


  fetch("https://api.got.show/api/characters/", function(response) {
    characters = response;
  }, function(status) {
    console.log(status);
  });


  addListener("generator", 'click', function(event) {
    event.preventDefault();
    viewCharacter();
  });

}());

function addListener(id, eventName, callback) {
  getId(id).addEventListener(eventName, callback); //3callback
}

function fetch(url, callback, callbackError) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    } else {
      console.log('Status Code: ' + xhr.status);
      if (callbackError) {
        callbackError(xhr.status);
      }
    }
  });
  xhr.open('GET', url);
  xhr.send();
}

function random() {
  return Math.floor(Math.random() * 2100) + 1;
}

function getId(id) {
  return document.getElementById(id);
}

function viewCharacter() {
  var character = characters[random()],
    character_1 = characters[random()],
    character_2 = characters[random()];
  display(charater);
  display(character_1);
  display(character_2);
}

function display(character) {
  src = character.imageLink ? "https://api.got.show" + character.imageLink : "";
  if (src) {
    photo.style.display = "";
    photo.setAttribute("src", src);
  } else {
    photo.style.display = "none";
  }
  name.innerHTML = character.name;
  gender.innerHTML = character.male ? "male" : "female";
  title.innerHTML = character.titles.length ? character.titles[0] : "";

  var x = document.createElement("p");
}
