  import angular from 'angular';
  import angularMeteor from 'angular-meteor';

  import template from './removeFavorite.html';
  import { Favorites } from '../../../api/favorites/collection';

  class RemoveFavorite {
    delete() {
      if(this.favorite) {
      Favorites.remove(this.favorite._id)
      console.log(this.favorite._id);
      };
    }
  }

  const name = 'removeFavorite';

  // create a module
  export default angular.module(name, [
    angularMeteor,
  ]).component(name, {
    template,
    bindings: {
      favorite: '<'
    },
    controllerAs: name,
    controller: RemoveFavorite
  });
