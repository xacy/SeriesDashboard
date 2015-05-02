import DS from 'ember-data';
var Serie= DS.Model.extend({
  tvdb_id       : DS.attr(),
  imdb_id       : DS.attr(),
  name          : DS.attr(),
  overview      : DS.attr(),
  logo          : DS.attr(),
  genre         : DS.attr(),
  actors        : DS.attr(),
  airDay       : DS.attr(),
  network       : DS.attr(),
  episode      : DS.hasMany('episode',{ async: true })
});
Serie.reopenClass({
  FIXTURES:[
    {
      id: 1,
      tvdb_id:95011,
      imdb_id:'tt1442437',
      name: 'Modern Family',
      overview: 'Cuando las familias Pritchett, Delgado y Dunphy acceden a ser entrevistados para hacer un documental, no tenian ni idea de cuanto podían revelar de si mismos. Jay Pritchett (Ed O\'Neill) conoció a su espectacular mujer colombiana Gloria (Sofia Vergara) cuando ella le sirvió en bikini en una fiesta en la piscina que él mismo organizó el día que lo dejo su mujer. Ahora, Jay y Gloria están casados y Jay intenta a duras penas aguantar con su espectacular y joven mujer y su hijo Manny (Rico Rodríguez), muy apasionado para su edad. Claire Dunphy (Julie Bowen), su hija, pasa calamidades para levantar su famiília de tres hijos revoltosos. Su marido, Phil (Ty Burrell), es genial si no fuera por el hecho de que intenta hacerse el amigo de sus hijos, hasta el punto de llegar a ser bochornoso. Mitchel Pritchett (Jesse Tyler Ferguson), su otro hijo, es gay, y junto a su pareja Cameron (Eric Stonestreet) adoptan una niña de Vietnam, Lily.',
      logo: 'http://thetvdb.com/banners/_cache/fanart/original/95011-21.jpg',
      genre: 'Comedia',
      actors:'|Julie Bowen|Ty Burrell|Jesse Tyler Ferguson|Eric Stonestreet|Sofia Vergara|Ed O\'Neill|Rico Rodriguez|Nolan Gould|Sarah Hyland|Ariel Winter|Aubrey Anderson-Emmons|',
      airDay:'Wednesday',
      network:'ABC',
      episode:[1]
    },
    {
      id: 2,
      tvdb_id:95011,
      imdb_id:'tt1442437',
      name: 'Modern Family2',
      overview: 'Cuando las familias Pritchett, Delgado y Dunphy acceden a ser entrevistados para hacer un documental, no tenian ni idea de cuanto podían revelar de si mismos. Jay Pritchett (Ed O\'Neill) conoció a su espectacular mujer colombiana Gloria (Sofia Vergara) cuando ella le sirvió en bikini en una fiesta en la piscina que él mismo organizó el día que lo dejo su mujer. Ahora, Jay y Gloria están casados y Jay intenta a duras penas aguantar con su espectacular y joven mujer y su hijo Manny (Rico Rodríguez), muy apasionado para su edad. Claire Dunphy (Julie Bowen), su hija, pasa calamidades para levantar su famiília de tres hijos revoltosos. Su marido, Phil (Ty Burrell), es genial si no fuera por el hecho de que intenta hacerse el amigo de sus hijos, hasta el punto de llegar a ser bochornoso. Mitchel Pritchett (Jesse Tyler Ferguson), su otro hijo, es gay, y junto a su pareja Cameron (Eric Stonestreet) adoptan una niña de Vietnam, Lily.',
      logo: 'http://thetvdb.com/banners/_cache/fanart/original/95011-21.jpg',
      genre: 'Comedia',
      actors:'|Julie Bowen|Ty Burrell|Jesse Tyler Ferguson|Eric Stonestreet|Sofia Vergara|Ed O\'Neill|Rico Rodriguez|Nolan Gould|Sarah Hyland|Ariel Winter|Aubrey Anderson-Emmons|',
      airDay:'Wednesday',
      network:'ABC',
      episode:[1]
    }
  ]
});
export default Serie;
