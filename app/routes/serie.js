import Ember from 'ember';
export default Ember.Route.extend({
  renderTemplate: function() {
     //this.render('overview');
//     //this.render('sidebar',{into:'application',outlet:'sidebar'});
     this.render('serie',{into:'application',outlet:'content'});
     //this.render('serie');
   },
   model: function(params){
    //  alert(params.serie_id);
    //var episode =this.store.find('episode');
     return this.store.find('serie',params.serie_id);
     /*
     Funcionan correctamente. aplica al enlace la clase active
     */
   }
});
