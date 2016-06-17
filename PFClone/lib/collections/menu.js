Meals = new Mongo.Collection('meals');
Types = new Mongo.Collection('types');

if (Meteor.isClient) {
  Meteor.startup(function() {
  });
  const handleMenu = Meteor.subscribe('menu.list');
  Tracker.autorun(() => {
    const isReady = handleMenu.ready();
  });
}

if (Meteor.isServer) {
  if(Meals.find().count() === 0){
    var meals = [
      {
        "name" : "Flaming Red Wontons",
        "description" : "Handmade pork wontons in a spicy garlic and sesame soy sauce finished with scallions",
        "price" : 7.95,
        "category": "Local Favorites Menu"
      },
      {
        "name" : "Flaming Red Wontons",
        "description" : "Handmade pork wontons in a spicy garlic and sesame soy sauce finished with scallions",
        "price" : 7.95,
        "category": "Local Favorites Menu"
      },
      {
        "name" : "Flaming Red Wontons",
        "description" : "Handmade pork wontons in a spicy garlic and sesame soy sauce finished with scallions",
        "price" : 7.95,
        "category": "Local Favorites Menu"
      }
    ];

    var menuTypes = [
      {
        "name" : "Local Favorites Menu"
      },
      {
        "name" : "Small Plates"
      },
      {
        "name" : "Sushi"
      },
      {
        "name" : "Main Entrees-Chicken"
      },
      {
        "name" : "Main Entres-Seafood"
      },
      {
        "name" : "Main Beef & Pork"
      },
      {
        "name" : "Vegetarian"
      }
    ];

    _.each(meals, function(meal){
      Meals.insert(meal);
      console.log("Added ", meal);
    });

    _.each(menuTypes, function(type) {
      Types.insert(type);
      console.log(type);
    })
  }

}
