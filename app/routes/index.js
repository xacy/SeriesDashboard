import Ember from 'ember';
export default Ember.Route.extend({
  renderTemplate: function() {
     //this.render();
     this.render('sidebar',{into:'application',outlet:'sidebar'});
     this.render('overview',{into:'application',outlet:'content'});
   },
   model: function(){
     return this.store.find('serie');
}
});
