Meteor.publish('images.list', function() {
  return Images.find({});
})

Meteor.publish('meals.list', function() {
  return Meals.find({});
})

Meteor.publish('types.list', function() {
  return Types.find({});
});
