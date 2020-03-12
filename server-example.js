var http = require('http');
var url=require("url")
var query=require("querystring")

const accountSid = "Your Twilio Account SID";
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

http.createServer(function (req, res) { //This line create a webserver

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(req.url);    
  res.write("   Server is Working")

  var params = query.parse(url.parse(req.url).query); //Get the URL
  var mobileNumber=(params["phoneNumber"]); //Get the phone number from the URL through the phoneNumber parameter-Example : http://localhost:8080/?phoneNumber=PhoneNumberToCall(with + prefix)

  client.calls
        .create({
           url: 'http://demo.twilio.com/docs/voice.xml',
           to: mobileNumber,   //Number that recive the call
           from: '+XXXXXXXXXXX'  //Number that you have on your Twilio Account
         })
        .then(call => console.log(call.sid));


}).listen(8080); //Port of your Server
