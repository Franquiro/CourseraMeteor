
   if(Meteor.isServer) {Meteor.startup(function(){
        if(Images.find().count()==0){
            Images.insert({
                img_src:"img/laptops.jpg",
                img_alt:"some laptops",
                img_label:"Lan Party",
                img_description:"Set of laptops ready to game!"
              });
        }
    });
}
