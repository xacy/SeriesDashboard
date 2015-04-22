import Ember from 'ember';
export default Ember.Route.extend({
  renderTemplate: function() {
     this.render();
     //this.render('sidebar',{into:'application',outlet:'sidebar'});
     //this.render('serie',{outlet:'content'});
   },
   model: function(){
     //alert('application');
  return this.store.find('serie');
}
});
