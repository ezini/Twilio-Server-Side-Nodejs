# Twilio-Server-Side-Nodejs
Simple example of a Server Side Twilio js file to send call to a specific number determined by the Url GET parameter.

# Example:
If you have set up the server correctly (the js file), you should be able to send call. Let's analyze the following url:

http://localhost:8080/?phoneNumber=+XXXXXXXXXXX

In this case the server run on a local host (http://localhost:8080), but this can be hosted on ngrok, for example.

?phoneNumber= >> Here we have the GET parameter called phoneNumber which tells the server which number should be called. Example: +1XXXXXXXXXX

# Conclusion

if we setup all correctly when we digit on the browser the http://localhost:8080/?phoneNumber=+XXXXXXXXXXX url, the server will receive the request and the call will be forwarded to the specified number.

To start the server: node server.js
