import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('series', function(){
    this.resource('serie', { path:'/:serie_id' });
  });
  this.resource('search', {path: '/search'}, function(){
    this.route('results', {path: ':keyword'});
  });
});
