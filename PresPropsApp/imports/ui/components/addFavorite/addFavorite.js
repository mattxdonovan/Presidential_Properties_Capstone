  import angular from 'angular';
  import angularMeteor from 'angular-meteor';
  import uiRouter from 'angular-ui-router';

  import { Meteor } from 'meteor/meteor';
  import { Accounts } from 'meteor/accounts-base';

  import template from './addFavorite.html';
  import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
  import { name as UserProfile } from '../userProfile/userProfile';
  import { Apartments } from '../../../api/apartments/collection';
  import { Favorites } from '../../../api/favorites/collection';

  class AddFavorite {
    constructor($scope, $reactive, $stateParams) {
      'ngInject';

      $reactive(this).attach($scope);

      this.apartmentId = $stateParams.apartmentId;

      // this.subscribe('favorites');

      this.helpers({
        apartmentFind() {
          return Apartments.findOne({
            _id: $stateParams.apartmentId
          });
        }
      });
      this.helpers({
        submit() {
          Favorites.insert({
            user_id: Meteor.userId(),
            favoriteId: this.apartmentId,
            beds: this.apartmentFind.bedrooms,
            baths: this.apartmentFind.bathrooms,
            title: this.apartmentFind.title,
            price: this.apartmentFind.price,
            piclink: this.apartmentFind.piclink
          });
        }
      })
      this.helpers({
        findId() {
          return Meteor.userId();
        }
      });
    }
  }

  const name = 'addFavorite';

  // create a module
  export default angular.module(name, [
    angularMeteor,
    uiRouter,
  ]).component(name, {
    template,
    controllerAs: name,
    controller: AddFavorite
  });
