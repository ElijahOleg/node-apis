var fs = require("fs"),
    http = require("http"),
    request = require('request'),
    url = require('url'),
    md5 = require('MD5'),
    exec = require("child_process").exec;

// exec("df -h", function(err, stdout, stderr) {
//   console.log(err, stdout, stderr);
// });

http.createServer(responseHandler).listen(8888);

function responseHandler(req, res) {
  if (req.url.match("fav")) {
    res.end("");
    return;
  }

  // exec("vm_stat", function(err, stdout, stderr) {
  //   res.end(stdout.match(/free:\s+(\d+)\./)[1]);
  // });

  if (req.url === "/") {
    // server index.html
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('index.html', 'utf8', function (err,data) {
    console.log(data);
      res.end(data);
    });
  }
  // if(req.url.match(/\d\+\d/)){
  //   req.url.split()
  // }
  else if (req.url.match(/gravatarUrl/)) {
    var justEmail = req.url.replace("/gravatarUrl/", "")
    res.end("http://www.gravatar.com/avatar/" + md5(justEmail));
  }
  else if (req.url.match("/Calc/")) {
    var justOpera = req.url.replace("/Calc/","");
    var operator = justOpera.replace(/\d([+,-,\/,*])\d/,"$1");
    var number1 =parseInt(justOpera.replace(/(\d)[+,-,\/,*]\d/,"$1"));
    var number2 =parseInt(justOpera.replace(/\d[+,-,\/,*](\d)/,"$1"));
    var math = {
      "+": function(a,b){
        return a+b;
      },
      "-": function(a,b){
        return a - b;
      },
      "/": function(a,b){
        return a/b;
      },
      "*": function(a,b){
        return a*b;
      }
    }
    var answer = math[operator](number1, number2)
    res.end(answer.toString())
  }
  else if (req.url.match("/Counts/")) {
    var codedSentance = req.url.replace("/Counts/",""),
        sentance = decodeURI(codedSentance),
        justSpaces = sentance.replace(/\w?(\s)\w+/g, "s"),
        justLetters = sentance.replace(" ", ""),
        justWords = sentance.split(" "),
        countsObject = {words: justWords.length, letters: justLetters.length, spaces: justSpaces.length};
        console.log(justSpaces);
    res.end(JSON.stringify(countsObject));
  }
  else {
    res.writeHead(200, {"Content-Type": "text/plain"});
    request('http://points.agilelabs.com'+req.url+'.json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.end(body);
      }
    });
  }
  function matchTwenty(codedString, object){

  }

}
