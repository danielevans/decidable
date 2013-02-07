
Decidable.Router.map(function() {
  this.resource("establishments", function () {
    this.route("new");
  });
});

Decidable.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('establishments');
  }
});

Decidable.EstablishmentsIndexRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set("content", model);
  },
  model: function() {
    return Decidable.Establishment.find();
  }
});

Decidable.EstablishmentsNewRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set("content", model);
  },
  model: function() {
    return Decidable.Establishment.createRecord();
  }
});

