# Chuck Norris Joke Sender

This is a simple application for receiving random joke about Chuck Norris from [Chuck Norris service][check_url]. Received joke will be sended as a content of email message to several receivers.

- [Random joke generator endpoit][random_joke_url] 

## NPM
Package is avalaible in [public NPM repository][npm_url].

## Setup configuration
To run this package you need to have allowed 'less secure application' in google account settings.
 - You are able to allow this setting on [following link][enable_app_url]

Next you need to set up some environment variables on your system.
 - GMAIL_USERNAME - gmail account with enabled ['less secure application'][enable_app_url], example: <USERNAME>@gmail.com
 - GMAIL_PASSWORD - password of gmail account
 - CHUCK_RECEIVERS - list of email addresses, example '<USERNAME_1>@gmail.com, <USERNAME_2>@gmail.com, <USERNAME_3>@gmail.com'
## How to install and use [npm package][npm_url]
Just install package from public repository and call "GetAndSendRandomJoke" function without parameters.
 - installaion
```sh
npm install chuck-joke-sender
```
 - use package in generated Node.js application and JavaScript file ('index.js' in ES6 Standard) 
```sh
import * as sender from "chuck-joke-sender";

sender.GetAndSendRandomJoke();
```
If you run Node.js application than you are able to see successful login message.
```sh
node .\index.js
Email sent: 250 2.0.0 OK  <OTHER_CONFIGURATIONS_DEPENDS_ON_YOUR_SYSTEM>
```

   [random_joke_url]: <https://api.chucknorris.io/jokes/random>
   [chuck_url]: <https://api.chucknorris.io>
   [npm_url]: <https://www.npmjs.com/package/chuck-joke-sender>
   [enable_app_url]: <https://myaccount.google.com/lesssecureapps>
