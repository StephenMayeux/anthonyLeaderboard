$(document).ready(function() {
  var imgTag;

  $.ajax({
    url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
    success: function(campers) {
      campers.forEach(function(camper, i, a) {
        imgTag = '<img src=\"' + camper.img + '\" />'
        $('#camperList').append('<li>' + imgTag + '</li>');
      });
    },
    error: function(error) {
      console.log('The response has failed', error);
    }
  })
});





// // ES2015 / ES6
//
// var name = 'Stephen';
// var result = 'Hello ' + name;
//
// // es6 template strings
// `Hello ${name}`
