import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
export const Tokens = new Mongo.Collection("tokens");
Meteor.methods({
  "tokens.insert"(token,expires_in){
    return Tokens.insert({ token,expires_in });
  },
  "find_token"(){
    return Tokens.findOne();
  }
});
