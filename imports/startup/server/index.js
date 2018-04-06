import './linkedinmethods'
import { Meteor } from 'meteor/meteor';
import url from 'url'
import { WebApp } from 'meteor/webapp'
Meteor.startup(() => {
  // code to run on server at startup

  WebApp.connectHandlers.use('/', (req, res, next) => {
    const code = url.parse(req.url, true).query.code;
    if(code){
      console.log(code);
      Meteor.call("get_access_token",code,(err,res)=>{
        if(err)
        console.log(err);
        else {
          console.log(res.data['access_token']);
        
        }
      })
      // Meteor.call("get_oauth_token", oauth_verifier, (err, res) => {
      //
      // })
    }
    next();
  })

});
