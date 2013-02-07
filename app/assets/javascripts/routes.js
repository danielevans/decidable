
Decidable.Router.map(function() {
  this.resource("establishments", function () {
  });
});

Decidable.EstablishmentsRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set("content", model);
  },
  model: function() {
    return Decidable.Establishment.find();
  }
});
