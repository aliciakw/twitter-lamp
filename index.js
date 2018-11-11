const uuid = require('uuid/v4');

var request = require('request');

var enc_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');
var oauthOptions = {
  url: 'https://api.twitter.com/oauth2/token',
  headers: { 
    'Authorization': 'Basic ' + enc_secret,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: 'grant_type=client_credentials'
};

const getAccesToken = () => {
  request.post(oauthOptions, function (e, r, body) {
    console.log(body)
  });
};





var timeline_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
var search_url = 'https://api.twitter.com/1.1/search/tweets.json'; //?q=%40losant&include_entities=false ';
const screen_name = 'rhoen2009';
var seen = [];

var reqParams = {
  url: timeline_url,
  headers: { 
    'Authorization': 'Bearer ' + ACCCESS_TOKEN
  },
  // headers: {

  // },
  qs: {
    q: `@${screen_name}`,
    count: 3
  }
};

const pollTwitter = () => {
  return request.get(reqParams, (e, r, body) => {
    if (e) {
      console.log('ERROR', e);
      return;
    }
    if (r) {
      console.log('RESPONSE', r);
      return;
    }
    console.log(body);
  });
}

//pollTwitter();

//Callback functions
var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  console.log('Data [%s]', data);
};

const TwitterJSClient = require('twitter-js-client');
const Twitter = TwitterJSClient.Twitter;

//Get this data from your twitter apps dashboard
var config = {
  "consumerKey": consumer_key,
  "consumerSecret": consumer_secret,
  "accessToken": accessToken,
  "accessTokenSecret": accessTokenSecret,
  //"callBackUrl": "XXX"
}

var twitter = new Twitter(config);

twitter.getUserTimeline({ screen_name, count: '10' }, error, success);


