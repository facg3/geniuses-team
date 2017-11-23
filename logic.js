
(function () {

  function getId(id) {
    return document.getElementById(id);
  }

  function addListener(id, eventName, callback) {
    getId(id).addEventListener(eventName, callback);
  }

  function fetch(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(null,response);
      } else {
        console.log('Status Code: ' + xhr.status);
        callback({err:xhr.status});
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
      youtube = getId("youtube"),
      characters = [],
      ul = document.createElement("ul");
      youtube.appendChild(ul);

  function viewCharacter(i,v,c) {
    var character = characters[i],
        character_2 = characters[v],
        character_3 = characters[c],
        src = character.imageLink   ? "https://api.got.show" + character.imageLink : "./img/no.png",
        src1 = character_2.imageLink ? "https://api.got.show" + character_2.imageLink : "./img/no.png",
        src2 = character_3.imageLink ? "https://api.got.show" + character_3.imageLink : "./img/no.png";

        photo.setAttribute("src", src);
        photo1.setAttribute("src", src1);
        photo2.setAttribute("src", src2);

        console.log(src);
        console.log(src1);

    name.innerHTML = "Name :: " + character.name;
    gender.innerHTML = character.male ? "Gender Is: male" : "Gender Is: female";
    title.innerHTML = character.titles.length ? "Title :: " + character.titles[0] : "Dont have title";

    name1.innerHTML = "Name :: " + character_2.name;
    gender1.innerHTML = character_2.male ? "Gender Is: male" : "Gender Is: female";
    title1.innerHTML = character_2.titles.length ? "Title :: " + character_2.titles[0] : "Dont have title";

    name2.innerHTML = "Name :: " + character_3.name;
    gender2.innerHTML = character_3.male ? "Gender Is: male" : "Gender Is: female";
    title2.innerHTML = character_3.titles.length ? "Title :: " + character_3.titles[0] : "Dont have title";
  }

  fetch("https://api.got.show/api/characters/", function (err,response) {
    console.log('fffff',response);

    if(err) console.log('error',err);
     characters = response;
  });
  function createUrl(o) {
  return "https://www.googleapis.com/youtube/v3/search?" + Object.keys(o).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(o[key]);
  }).join("&");
}

  addListener("generator", 'click', function (event) {
    event.preventDefault();
    if (characters.length) {
      viewCharacter(Math.floor(characters.length * Math.random()),Math.floor(characters.length * Math.random()),Math.floor(characters.length * Math.random()));
    }
  });
  

  addListener("name", 'click', function (event) {
    event.preventDefault();
    var url = createUrl({
      maxResults: 2,
      part: "snippet",
      q: character.name + "game of throne",
      type: "video",
      key: "AIzaSyAwcR2HXWwH6M71enJCPrM98A6rvJhHyFc"
    });
    fetch(url, function (err,json) {
      console.log(json);
      if(err) console.log('error',err);
      ul.innerHTML = "";
      json.items.forEach(function (item) {
        var src = item.snippet.thumbnails.default.url,
            img = document.createElement("img"),
            title = item.snippet.title,
            h3 = document.createElement("h3"),
            li = document.createElement("li");
        img.src = src;
        h3.appendChild(document.createTextNode(title));
        li.appendChild(h3);
        li.appendChild(img);
        ul.appendChild(li);
      });
    });
  });
}());
