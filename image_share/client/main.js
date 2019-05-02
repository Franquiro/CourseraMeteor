import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import './main.html';

// routing
Router.configure({
  layoutTemplate:'AplicationLayout'
});

Router.route('/',function () {
  this.render('welcome',{
    to:"main"
  });
});
Router.route('/images',function () {
  this.render('navbar',{
    to:"navbar"
  });
  this.render('images',{
    to:"main"
  });
});
Router.route("/singleImage/:_id",function(){
  this.render('navbar',{
    to:"navbar"
  });
  this.render('singleImage',{
    to:"main",
    data:function(){
      return Images.findOne({_id:this.params._id});
    }
  });
});
// END ROUTING 
Images = new Mongo.Collection("images");
// INFINITE SCROLL
Session.set("imageLimit",8); //variable de sesion para mostrar unicamente 8 imagenes.
lastScrollTop = 0; //posición en la que estoy al arrancar el scroll
//scroll event
$(window).scroll(event => {
  // tests if we are near the bottom of the window
  if($(window).scrollTop()+$(window).height() > $(document).height() -100){
      //check where we are
    var scrollTop = $(this).scrollTop();
    //test if im going down
    if(scrollTop > lastScrollTop){
      //cambio el limite de imagenes a limite+X
      Session.set("imageLimit",Session.get("imageLimit")+4);
      console.log("estoy bajando");
    }
    else console.log("estoy subiendo");
    
    lastScrollTop = scrollTop;

  }
});

//LOGIN / REGISTRATION FORM
Accounts.ui.config({
  passwordSignupFields:"USERNAME_AND_EMAIL"
});


//IMAGENES
//Busco todas las imagenes de la base de datos y las ordeno por mas nueva y mayor rating
Template.images.helpers({
  images:function(){
    if(Session.get("userFilter")){
      //THEY SET A FILTER
      return Images.find({createdBy:Session.get("userFilter")},{sort:{img_order:1}});
    }
    return Images.find({img_seen:false},{sort:{img_order:1},limit:Session.get("imageLimit")});
  },
  filtering_images:function(){
    if(Session.get("userFilter")){
      return true;
    }
    return false;
  },
  getFilterUser:function(){
    if(Session.get("userFilter")){
      var user = Meteor.users.findOne({_id:Session.get("userFilter")});
      return user.username;
    }
    return false;
  },
  getUser:function(user_id){
    var user = Meteor.users.findOne({_id:user_id});
    if(user)return user.username;
    else return "anonymous";
  },

}); //encuentro las imagenes en la BDD
// sort:{rating:-1} ordena las imágenes de mayor rating a menor rating.


//detallo los eventos de las imagenes
Template.images.events({
  //cuando clickeo una imagen, se achica a 50px
  /*'click .js-image':function(event){
    $(event.target).css("width","50px");
  },*/
  //cuando clickeo el boton de delete, hago una animacion de ocultar,
  //y la borro de la base de datos.
  //la encuentro en la base de datos por su id
  'click .js-hide-image':function(event){
    var image_id = this._id;
    //console.log(image_id);//imprime el id de la imagen en la BDD
    //console.log(Images.find().count());
    $("#"+image_id).hide('slow',function(){
      Images.update({_id:image_id},{$set:{img_seen:true}});//elimina la imagen con el  id de la BDD
      //console.log(Images.find().count());
    }
    
    );
    
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
  'click .js-set-image-filter':function(event){
    Session.set("userFilter", this.createdBy);
  },
  'click .js-unset-image-filter':function(event){
    Session.set("userFilter", undefined);
  },
  // cuando clickeo una estrellita, le agrego el rating a la imagen, con la cantidad de estrellitas
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
  },
  'click .js-show-image-form':function(event){
      $("#image_add_form").modal('show');
  }
    
});

//eventos del formulario
Template.image_add_form.events({
  'submit .js-add-image':function(event){
    var img_src,img_label,img_year;
    img_src=event.target.img_src.value;
    img_label=event.target.img_label.value;
    img_year = event.target.img_year.value;
    console.log(img_src,img_label);
    if(Meteor.user()){
      Images.insert({
        img_src:img_src,
        img_alt: img_label+" (movie poster)",
        img_label:img_label,
        img_year:img_year,
        img_seen:false,
        createdBy:Meteor.user()._id,
        createdOn:new Date()
      });
    }
    $('#image_add_form').modal('hide');
    return false;
  }
});
//template del body completo
Template.body.helpers({username:function(){
  if(Meteor.user()){
    return Meteor.user().username;
  }
  else{
    return "Invitado";
  }
  /*try{
    console.log(Meteor.user().emails[0]);
  }catch{
    console.log("usuario no cargado");
  }*/
}
});