import { Meteor } from 'meteor/meteor';
let movies=[
  {
      img_src:"img_marvel/iron_man.jpg",
      img_alt: "Iron Man (movie poster)",
      img_label:"Iron Man",
      img_year:2008,
      img_order: 1,
      img_phase:1,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/the_incredible_hulk.jpg",
      img_alt: "The Incredible Hulk (movie poster)",
      img_label:"The Incredible Hulk",
      img_year:2008,
      img_order: 2,
      img_phase:1,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/iron_man_2.jpg",
      img_alt: "Iron Man 2 (movie poster)",
      img_label:"Iron Man 2",
      img_year:2010,
      img_order: 3,
      img_phase:1,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/thor.jpg",
      img_alt: "Thor (movie poster)",
      img_label:"Thor",
      img_year:2011,
      img_order: 4,
      img_phase:1,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/captain_america_the_first_avenger.jpg",
      img_alt: "Captain America: The First Avenger (movie poster)",
      img_label:"Captain America: The First Avenger",
      img_year:2011,
      img_order: 5,
      img_phase:1,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/the_avengers.jpg",
      img_alt: "The Avengers (movie poster)",
      img_label:"The Avengers",
      img_year:2012,
      img_order: 6,
      img_phase:1,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/iron_man_3.jpg",
      img_alt: "Iron Man 3 (movie poster)",
      img_label:"Iron Man 3",
      img_year:2013,
      img_order: 7,
      img_phase:2,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/thor_the_dark_world.jpg",
      img_alt: "Thor: The Dark World (movie poster)",
      img_label:"Thor: The Dark World",
      img_year:2013,
      img_order: 8,
      img_phase:2,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/captain_america_the_winter_soldier.jpg",
      img_alt: "Captain America: The Winter Soldier (movie poster)",
      img_label:"Captain America: The Winter Soldier",
      img_year:2014,
      img_order: 9,
      img_phase:2,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/guardians_of_the_galaxy.jpg",
      img_alt: "Guardians of the Galaxy (movie poster)",
      img_label:"Guardians of the Galaxy",
      img_year:2014,
      img_order: 10,
      img_phase:2,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/avengers_age_of_ultron.jpg",
      img_alt: "Avengers: Age of Ultron (movie poster)",
      img_label:"Avengers: Age of Ultron",
      img_year:2015,
      img_order: 11,
      img_phase:2,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/ant-man.jpg",
      img_alt: "Ant-Man (movie poster)",
      img_label:"Ant-Man",
      img_year:2015,
      img_order: 12,
      img_phase:2,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/captain_america_civil_war.jpg",
      img_alt: "Captain America: Civil War (movie poster)",
      img_label:"Captain America: Civil War",
      img_year:2016,
      img_order: 13,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/doctor_strange.jpg",
      img_alt: "Doctor Strange (movie poster)",
      img_label:"Doctor Strange",
      img_year:2016,
      img_order: 14,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/guardians_of_the_galaxy_vol_2.jpg",
      img_alt: "Guardians of the Galaxy Vol.2 (movie poster)",
      img_label:"Guardians of the Galaxy Vol.2",
      img_year:2017,
      img_order: 15,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/spider-man_homecoming.jpg",
      img_alt: "Spider-Man: Homecoming (movie poster)",
      img_label:"Spider-Man: Homecoming",
      img_year:2017,
      img_order: 16,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/thor_ragnarok.jpg",
      img_alt: "Thor: Ragnarok (movie poster)",
      img_label:"Thor: Ragnarok",
      img_year:2017,
      img_order: 17,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/black_panther.jpg",
      img_alt: "Black Panther (movie poster)",
      img_label:"Black Panther",
      img_year:2018,
      img_order: 18,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/avengers_infinity_war.jpg",
      img_alt: "Avengers:Infinity War (movie poster)",
      img_label:"Avengers: Infinity War",
      img_year:2018,
      img_order: 19,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/ant-man_and_the_wasp.jpg",
      img_alt: "Ant-Man and The Wasp (movie poster)",
      img_label:"Ant-Man and The Wasp",
      img_year:2018,
      img_order: 20,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/captain_marvel.jpg",
      img_alt: "Captain Marvel (movie poster)",
      img_label:"Captain Marvel",
      img_year:2019,
      img_order: 21,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  },
  {
      img_src:"img_marvel/avengers_endgame.jpg",
      img_alt: "Avengers: Endgame (movie poster)",
      img_label:"Avengers: Endgame",
      img_year:2019,
      img_order: 22,
      img_phase:3,
      img_seen:false,
      createdOn:new Date()
  }
];
Images = new Mongo.Collection("images");
console.log(Images.find().count());
Meteor.startup(() => {
  // code to run on server at startup
  if(Images.find().count()==0){
    for(var i=0 ; i<movies.length ; i++){
      Images.insert(movies[i]);
    }
    console.log(`Startup script says: 
    added ${Images.find().count()} images to db`);
}
  console.log("I am the server");
});
