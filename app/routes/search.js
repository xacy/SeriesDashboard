import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
     this.render('search',{into:'application',outlet:'content'});
   },
  actions: {
   search: function(keyword) {
     this.transitionTo('search.results', keyword);
   }
 }
});
