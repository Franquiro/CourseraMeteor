Images = new Mongo.Collection("images");
if(Meteor.isServer()){
console.log("running lib file");}
Images.allow({
    insert:function(userId,doc){
        return true;
    }
});