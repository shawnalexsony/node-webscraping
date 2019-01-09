
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
      result = check(text);
      //console.log(result);
      if(result!=="0")
      {news = 1;
      }
  });
});
if(news==1)
{ //do stuff if there is important news
  console.log(result);
}
else
{
  console.log("No important news");
}

function check(st){
  flag=0; res=" ";
  str=st.toLowerCase();
  if(str.includes("btech")||str.includes("b.tech")||str.includes("b tech"))
  {
    if(str.includes("result")||str.includes("results"))
    {
      flag=1;
      console.log("Check Results");
      res=res+"Check Results \n";
    }
    if(str.includes("timetable")||str.includes("time table"))
    {
      flag=1;
      console.log("Check timetable");
      res=res+"Check Timetable \n";
    }
    if(str.includes("registration"))
    {
      flag=1;
      console.log("Check for any registration");
      res=res+"Check for any registration \n";
    }
    
  }
  if(str.includes("examinations")&&str.includes("postponed"))
  {
    flag=1;
    console.log("Exam postponed");
    res=res+"Some Exams Postponed \n";
  }
  if(flag==0)
    {
      res="0";
    }
  return res;
}