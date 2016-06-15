Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Meteor.startup(function() {
  });

  const handle = Meteor.subscribe('images.list');
  Tracker.autorun(() => {
    const isReady = handle.ready();
  });
}

if(Images.find().count() === 0){
  var images = [
    {
      "sku" : "illudium-q36",
      "name" : "Illudium Q-36 Explosive Space Modulator",
      "image" : "illudium-q36.jpg",
      "published_at" : new Date(),
      "location": "http://localhost:3000/images/earnpoints.jpg",
      "text": "Earn Free Entrees",
      "vendor" : {
        "id" : 1,
        "slug" : "martian-armaments",
        "name" : "Martian Armaments, Ltd"
      }
    },
    {
      "sku" : "illudium-q36",
      "name" : "Illudium Q-36 Explosive Space Modulator",
      "image" : "illudium-q36.jpg",
      "published_at" : new Date(),
      "location": "http://localhost:3000/images/earnpoints.jpg",
      "text": "Earn Free Entrees",
      "vendor" : {
        "id" : 1,
        "slug" : "martian-armaments",
        "name" : "Martian Armaments, Ltd"
      }
    },
    {
      "sku" : "illudium-q36",
      "name" : "Illudium Q-36 Explosive Space Modulator",
      "image" : "illudium-q36.jpg",
      "published_at" : new Date(),
      "location": "http://localhost:3000/images/earnpoints.jpg",
      "text": "Earn Free Entrees",
      "vendor" : {
        "id" : 1,
        "slug" : "martian-armaments",
        "name" : "Martian Armaments, Ltd"
      }
    }
  ];

  // _.each(images, function(image){
  //   Images.insert(image);
  //   console.log("Added ", image.text);
  // });
}
