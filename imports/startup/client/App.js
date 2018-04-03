import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
  constructor(props){
    super(props);
  }


  linkedinLogin() {
    console.log("yoo")
    Meteor.call("get_request_token", (err, res) => {
      if(err)
      console.log(err)
      else{
        console.log(res)
      }
    })
  }
  render(){
    return(
      <button onClick = {this.linkedinLogin.bind(this)}>Login</button>
    )
  }
}
Meteor.startup(() => {
  ReactDOM.render(<App />,document.querySelector(".render-target"));
});
