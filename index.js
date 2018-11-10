const uuid = require('uuid/v4');

var request = require('request');
var consumer_key = 'mVxcHA7QHGmC7ASzjk90mIrdH';
var consumer_secret = '32VHBstVaNH9d0gS04XeGIm3GyR8x5Cox6YJMW2d1y1kSBY70n';
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

const ACCCESS_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAHlS8wAAAAAAiZzEweag9We%2FtxAczLAJvHiL7Pc%3DooMdoimTqnm36iIkn8WGphEE3hFfPQIMvT9LKRwCYCy8biIZ0R';



var timeline_url = 'https://api.twitter.com/1.1/statuses/user_timeline';
var search_url = 'https://api.twitter.com/1.1/search/tweets.json'; //?q=%40losant&include_entities=false ';
const screen_name = 'twitterapi';
var seen = [];

var reqParams = {
  url: search_url,
  headers: { 
    'Authorization': 'Bearer ' + ACCCESS_TOKEN
  },
  qs: {
    q: `@${screen_name}`,
    include_entities: false,
    count: 3
  }
};

const pollTwitter = () => {
  return request.get(reqParams, (e, r, body) => {
    if (e) {
      console.log('ERROR', e);
      return;
    }
    console.log(body);
  });
}

pollTwitter();