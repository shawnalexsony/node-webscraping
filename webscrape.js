
var request = require("request");
var cheerio = require("cheerio");
var news=0;
var result="";

request({
  uri: "https://ktu.edu.in/home.htm",
}, function(error, response, body) {
  var $ = cheerio.load(body);
  $(".annuncement li a").each(function() {
      var link = $(this);
      var text = link.text() ;
      console.log(text);
  });
});
