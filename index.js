
(function () {

  function getId(id) {
    return document.getElementById(id);
  }

  function addListener(id, eventName, callback) {
    getId(id).addEventListener(eventName, callback);//3callback
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
      characters = [];

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
        // photo.src = src;
        // photo1.src1 = src1;
        // photo2.src2 = src2;
        console.log(src);
        console.log(src1);
    // if (src) {
    //   photo.style.display = "";
    //   photo.setAttribute("src", src);
    // } else {
    //   photo.style.display = "none";
    // }

    // if (src1) {
    //   photo1.style.display = "";
    //   photo1.setAttribute("src", src1);
    // } else {
    //   photo1.setAttribute("src", );
    // }
    //
    // if (src2) {
    //   photo2.style.display = "";
    //   photo2.setAttribute("src", src2);
    // } else {
    //   photo2.style.display = "none";
    // }
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
    else {
      console.log('shahenaz');
      fetch("https://www.behindthename.com/api/lookup.php?name=" + "mark" +"&key=no007783",
       function (response) {
         console.log('tttt',response);
         var origins = Json.parse(response);
         console.log(origins);
         name.innerHTML += " " + origins.getElementsByTagName("usage_full").join(", ");
       });
     }
     characters = response;
  });
  // fetch("https://www.behindthename.com/api/lookup.php?name=" + character.name.split(" ")[0] +"&key=no007783", function (response) {
  //   characters = response;
  // }, function (status) {
  //   console.log(status);
  // });

  addListener("generator", 'click', function (event) {
    event.preventDefault();
    if (characters.length) {
      viewCharacter(Math.floor(characters.length * Math.random()),Math.floor(characters.length * Math.random()),Math.floor(characters.length * Math.random()));
    }
  });

}());
