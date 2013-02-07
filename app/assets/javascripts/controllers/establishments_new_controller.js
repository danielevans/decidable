Decidable.EstablishmentsNewController = Ember.ObjectController.extend({
  save: function () {
    this.content.on("didCreate", _.bind(function () {
      this.target.router.transitionTo("establishments.index");
    }, this));
    this.content.get("store").commit();
  }
});