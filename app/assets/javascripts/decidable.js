Decidable = Ember.Application.create();

Decidable.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    bulkCommit: false,
    mappings: {
      establishment: 'Decidable.Establishment'
    }
  })
});