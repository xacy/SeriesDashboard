import DS from 'ember-data';
var Episode= DS.Model.extend({
  tvdb_id       : DS.attr(),
  imdb_id       : DS.attr(),
  name          : DS.attr(),
  overview      : DS.attr(),
  seasonNumber  : DS.attr(),
  episodeNumber : DS.attr(),
  viewed        : DS.attr(),
  aired         : DS.attr(),
  serie        : DS.belongsTo('serie')
});
Episode.reopenClass({
  FIXTURES:[
    {
      id            : 1,
      tvdb_id       : '5160956',
      imdb_id       : '',
      name          : 'American Skyper',
      overview      : '',
      seasonNumber  : '6',
      episodeNumber : '24',
      viewed        : false,
      aired         : '2015-05-20',
      serie        : 1
    }
  ]
});
export default Episode;
