Images = new Mongo.Collection("images");

Images.allow({
    insert:function(userId,doc){
        return true;
    }
});