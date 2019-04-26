// shared code
Websites = new Mongo.Collection("websites");

// client only code
if (Meteor.isClient){
    // event listeners on the addSiteForm template
    Template.addSiteForm.events({
        // this runs when they click the add button... you need to compete it
        /*Edit the file main.js in a text editor. 
        Complete the implementation of the event ' 'click .js-add-site' 
        so it calls insert on the Websites collection to save the 'site' object.
        
        Once complete, you should see sites appearing in a list in the browser.*/
     'click .js-add-site':function(event){
         var url = $('#url_input').val();// get the form value using jquery...
   
         var site = {"url":url};// create a simple object to insert to the collectoin
         console.log("You need to put some code in here that calls insert on the Websites collection");
         // put your code in here...
         Websites.insert(site);
         return false;
     }
    });

    // this helper gets the data from the collection for the site-list Template
    Template.siteList.helpers({
        'all_websites':function(){
            return Websites.find({});
        },
    });

}
