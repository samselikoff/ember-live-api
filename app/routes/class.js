export default Ember.Route.extend({
  model: function(params) {
    return this.store.findClass(params.className);
  }
});
