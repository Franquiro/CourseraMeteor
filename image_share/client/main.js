import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Images = new Mongo.Collection("images");
console.log(Images.find().count());

//IMAGENES
var img_data=[
  ,
  {
    img_src:"img/bass.jpg",
    img_alt:"some bass",
    img_label:"Bass",
    img_description:"image of bass"
  },
  {
    img_src:"img/beard.jpg",
    img_alt:"some beard",
    img_label:"Beard",
    img_description:"image of beard"
  }
];
Template.images.helpers({images:img_data});
Template.images.events({
  'click .js-image':function(event){
    $(event.target).css("width","50px");
  }
});