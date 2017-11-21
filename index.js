(function () {
    var domainGot = "https://anapioficeandfire.com/api/characters/";
//    var charnum = "";  // text has %20 for spaces
    var urlGot = "";
    var generator =document.getElementById("generator");
    var xhrGot = new XMLHttpRequest();
//    var gglQ = "";  // text has + for spaces
//    var domainGgl = "http://www.google.com/search?start=0&num=10&q="+gglQ+"&cr=countryCA&client=google-csbe&output=xml_no_dtd&cx=00255077836266642015:u-scht7a-8i";
//

    generator.addEventListener('click', function(event){
        var number = Math.floor(Math.random()*2100)+1;
        text = number +"";
        urlGot = domain+text;
        console.log(number);
        var name;
        xhrGot.onreadystatechange = function() {
        if(xhrGot.readyState === 4 && xhrGot.status === 200) {
            var response = JSON.parse(xhrGot.responseText);
            while(response.name === "") {

            }
            var xhrGgl = new XMLHttpRequest();
            xhrGgl.onreadystatechange = function() {
                if(xhrGgl.readyState === 4 && xhrGgl.status === 200) {

                }
            }
        }
    }
    });


})();





//(function () {
//    var xhr = new XMLHttpRequest();
//    var domain = "https://www.googleapis.com/";
//    var text = "";  // text has %20 for spaces
//    var key = "/v1?key=AIzaSyDACm4IoPye6t_LOAtElYObUxoPni83sUI";
//    AIzaSyB4uaTZdQD--TDp_m7QXFCIXwfM4gGZAvc
//    var url = "";
//    xhr.onreadystatechange = function() {
//        if(xhr.readyState === 4 && xhr.status === 200) {
//            var obj = JSON.parse(xhr.responseText);
//
//        }
//    }
//})();
