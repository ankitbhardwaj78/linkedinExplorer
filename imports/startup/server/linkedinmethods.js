import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'
import {Tokens} from '../../api/tokens';
var parser = require('xml2json');

Meteor.methods({
  "get_request_token"(){
    console.log("enter");
    let base_url = "https://www.linkedin.com/oauth/v2/authorization?"
    let response_type = "code"
    let client_id = "81h4qfql5q2qlg"
    let redirect_uri = "http://localhost:3000/"
    let state = "DCEeFWf45A53sdfKef426"
    let apiurl =`${base_url}response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`
    console.log(apiurl);
    return apiurl;
  },
  "get_access_token"(code){
    let base_url = "https://www.linkedin.com/oauth/v2/accessToken?"
    let grant_type = "authorization_code"
    let redirect_uri = "http://localhost:3000/"
    let client_id = "81h4qfql5q2qlg"
    let client_secret = "gjssfLMW8g9VVJ0U"
    let apiurl =`${base_url}grant_type=${grant_type}&code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`
    console.log(apiurl);
    let res = HTTP.call("post",apiurl);
    Meteor.call("tokens.insert",res.data['access_token'],res.data['expires_in'],(err,res)=>{
      if(err)
      console.log(err);
      else {
        console.log(res);
      }
    })
    return res;
  },
   "get_profile_page"(token){
    let base_url = "https://api.linkedin.com/v1/companies/13701308/company-statistics?"
    let apiurl = `${base_url}oauth2_access_token=${token}`
    console.log(apiurl);
    let res = HTTP.call("get",apiurl);
    console.log(res);
    let res1 = parser.toJson(res.content);
    return res1;
  }

});
