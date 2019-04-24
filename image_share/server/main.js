import { Meteor } from 'meteor/meteor';
Images = new Mongo.Collection("images");
console.log(Images.find().count());
Meteor.startup(() => {
  // code to run on server at startup
  if(Images.find().count()==0){
    for(var i=1 ; i<23 ; i++){
      Images.insert({
        img_src:"img/img_"+i+".jpg",
        img_alt:"Imagen"+i,
        img_label:"Imagen "+i,
        img_description:"Imagen agregada de manera automatica"
      });
    }
    console.log(`Startup script says: 
    added ${Images.find().count()} images to db`);
}
  console.log("I am the server");
});
