Meteor.publish('images.list', function() {
  return Images.find({});
})
