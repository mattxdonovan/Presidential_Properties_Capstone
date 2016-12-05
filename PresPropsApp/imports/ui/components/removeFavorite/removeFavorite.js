  // import angular from 'angular';
  import angularMeteor from 'angular-meteor';
  import uiRouter from 'angular-ui-router';

  import { Meteor } from 'meteor/meteor';

  import webTemplate from './web.html';
  import mobileTemplate from './mobile.html';
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
  const template = Meteor.isCordova ? mobileTemplate : webTemplate;

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
