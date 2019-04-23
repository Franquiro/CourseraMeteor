import { Meteor } from 'meteor/meteor';
Images = new Mongo.Collection("images");
console.log(Images.find().count());
Meteor.startup(() => {
  // code to run on server at startup
  if(Images.find().count()==0){
    Images.insert({
        img_src:"img/laptops.jpg",
        img_alt:"some laptops",
        img_label:"Lan Party",
        img_description:"Set of laptops ready to game!"
      });
      Images.insert({
        img_src:"img/bass.jpg",
        img_alt:"some bass",
        img_label:"Bass",
        img_description:"image of bass"
      });
      Images.insert({
        img_src:"img/beard.jpg",
        img_alt:"some beard",
        img_label:"Beard",
        img_description:"image of beard"
      });
}
  console.log("I am the server");
});
