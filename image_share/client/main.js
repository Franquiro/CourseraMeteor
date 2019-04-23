import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Images = new Mongo.Collection("images");


//IMAGENES

Template.images.helpers({images:img_data});
Template.images.events({
  'click .js-image':function(event){
    $(event.target).css("width","50px");
  }
});