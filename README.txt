Create your own API

Description

Your assignment is to built a server with a set of APIs using Node, like we did today in class.  You will define a simple node server that will respond to requests at a set of given endpoints, described below.

API Endpoints

Gravitar Url:   /gravatarUrl/samer.buna@gmail.com

When your server receives a request sent to  [server url]/gravatarUrl/[email address] , it will accept an email address from the url, and respond with the corresponding Gravatar url.

You can create this url by making an MD5 hash of the email address given, and then putting it into this example url:

http://www.gravatar.com/avatar/[HASH]

Here would be Samer’s:
http://www.gravatar.com/avatar/4b6b338a1609ea0a4dfec74208425620

Discover an npm package made for making MD5 hashes here: https://www.npmjs.com/package/MD5

Math Calculator:  /Calc/4+5

This endpoint will take accept an arithmetic calculation in the URL, evaluate it, and then return the result.  It will take the form of two numbers with one operator in between them.

It should accept addition, subtraction, multiplication, and division.

The above example would return 9.

Sentence Counter:  /Counts/A%20Sentence%20here

This endpoint will accept a sentence string, and then count up the letters, spaces, and words in that string.  This will be URI encoded (the spaces will be %20s).  To decode it, use decodeURI(). Your server should return an object with all of the required counts.  This object will need to be stringified.
ex.  '{"letters":15,"spaces":2,"words":3}'
