import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Images = new Mongo.Collection("images");


//IMAGENES

Template.images.helpers({images:Images.find({},{sort:{createdOn:-1, rating:-1}})}); //encuentro las imagenes en la BDD
// sort:{rating:-1} ordena las imágenes de mayor rating a menor rating.



Template.images.events({
  'click .js-image':function(event){
    $(event.target).css("width","50px");
  },
  'click .js-del-image':function(event){
    var image_id = this._id;
    //console.log(image_id);//imprime el id de la imagen en la BDD
    //console.log(Images.find().count());
    $("#"+image_id).hide('slow',function(){
      Images.remove({"_id":image_id});//elimina la imagen con el  id de la BDD
      //console.log(Images.find().count());
    }
    
    );
    
  },

  'click .js-rate-image':function(event){
    var rating=$(event.currentTarget).data("userrating");
    var image_id=this.id;
    //actualizo la imagen en la BDD con el id y el rating.
    Images.update({_id:image_id},
                  {
                    $set:{
                      rating:rating
                    }
                  });
  } 
    
});

//eventos del formulario
Template.image_add_form.events({
  'submit .js-add-image':function(event){
    var img_src,img_label;
    img_src=event.target.img_src.value;
    img_label=event.target.img_label.value;
    console.log(img_src,img_label);

    Images.insert({
      img_src:img_src,
      img_alt:"added image",
      img_label:img_label,
      createdOn:new Date()
    });
    return false;
  }
});