
(function () {

  function getId(id) {
    return document.getElementById(id);
  }

  function addListener(id, eventName, callback) {
    getId(id).addEventListener(eventName, callback);//3callback
  }

  function fetch(url, callback, callbackError) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
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

  var photo = getId("photo"),
      name = getId("name"),
      gender = getId("gender"),
      title = getId("title"),
      photo1 = getId("photo1"),
      name1 = getId("name1"),
      gender1 = getId("gender1"),
      title1 = getId("title1"),
      photo2 = getId("photo2"),
      name2 = getId("name2"),
      gender2 = getId("gender2"),
      title2 = getId("title2"),
      characters = [];

  function viewCharacter(i,v,c) {
    var character = characters[i],
        character_2 = characters[v],
        character_3 = characters[c],
        src = character.imageLink ? "https://api.got.show" + character.imageLink : "",
        src1 = character_2.imageLink ? "https://api.got.show" + character_2.imageLink : "",
        src2 = character_3.imageLink ? "https://api.got.show" + character_3.imageLink : "";
    if (src) {
      photo.style.display = "";
      photo.setAttribute("src", src);
    } else {
      photo.style.display = "none";
    }
    name.innerHTML = character.name;

    gender.innerHTML = character.male ? "male" : "female";
    title.innerHTML = character.titles.length ? character.titles[0] : "";
    if (src1) {
      photo1.style.display = "";
      photo1.setAttribute("src", src1);
    } else {
      photo1.style.display = "none";
    }
    name1.innerHTML = character_2.name;

    gender1.innerHTML = character_2.male ? "male" : "female";
    title1.innerHTML = character_2.titles.length ? character_2.titles[0] : "";
    if (src2) {
      photo2.style.display = "";
      photo2.setAttribute("src", src2);
    } else {
      photo2.style.display = "none";
    }
    name2.innerHTML = character_3.name;

    gender2.innerHTML = character_3.male ? "male" : "female";
    title2.innerHTML = character_3.titles.length ? character_3.titles[0] : "";
  }

  fetch("https://api.got.show/api/characters/", function (response) {
    characters = response;
  }, function (status) {
    console.log(status);
  });


  addListener("generator", 'click', function (event) {
    event.preventDefault();
    if (characters.length) {
      viewCharacter(Math.floor(characters.length * Math.random()),Math.floor(characters.length * Math.random()),Math.floor(characters.length * Math.random()));
    }
  });

}());
