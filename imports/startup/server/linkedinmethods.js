import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'
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
    let res = HTTP.call("get", apiurl);
    console.log(res);
    return res;
  }
});
