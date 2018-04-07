import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Tokens} from '../../api/tokens';
class App extends Component{
  constructor(props){
    super(props);
  }

  companyProfile(){
    let token = Tokens.findOne();
    Meteor.call("get_profile_page",token.token,(err,res)=>{
      if(err)
      console.log(err);
      else
      console.log(res.content);
    })
  }

companyUpdates(){
  let token = Tokens.findOne();
  Meteor.call("get_updates",token.token,(err,res)=>{
    if(err)
    console.log(err);
    else
    console.log(res.content);
  })
}
  linkedinLogin() {
    Meteor.call("get_request_token", (err, res) => {
      if(err)
      console.log(err)
      else{
        console.log(res);
        this.anchor.href = res;
        res = this.anchor.click();

      }
    })
  }
  render(){

    let token = Tokens.find();
    console.log("yo",token);
    if(token)
    {
      return(
        <div>
        <button onClick = {this.companyProfile.bind(this)}>Company Profile</button>
        <button onClick = {this.companyUpdates.bind(this)}>Company Updates</button>
        </div>
      )
    }
    else{
      return(
        <div>
        <p id="po"></p>
        <button onClick = {this.linkedinLogin.bind(this)}>Login</button>
        <a style = {{ display: "none" }} href="#" ref = {el => {this.anchor = el; }} ></a>
        </div>
      )
    }
  }
}
Meteor.startup(() => {
  ReactDOM.render(<App />,document.querySelector(".render-target"));
});
