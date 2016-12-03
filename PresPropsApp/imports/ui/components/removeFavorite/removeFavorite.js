  import angular from 'angular';
  import angularMeteor from 'angular-meteor';
  // import uiRouter from 'angular-ui-router';
  //
  // import { Meteor } from 'meteor/meteor';
  // import { Accounts } from 'meteor/accounts-base';

  import template from './removeFavorite.html';
  // import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
  // import { name as UserProfile } from '../userProfile/userProfile';
  // import { Apartments } from '../../../api/apartments';
  import { Favorites } from '../../../api/favorites';

  class RemoveFavorite {
    // constructor($scope, $reactive, $stateParams) {
    //   'ngInject';
    //
    //   $reactive(this).attach($scope);
    //
    //   this.userId = $stateParams.user_id;
    //
    //   this.helpers({
    //     apartmentFind() {
    //       return Favorites.findOne({
    //         user_id: $stateParams.userId
    //       });
    //     }
    //   });
    //   this.helpers({
        delete() {
          if(this.favorite) {
          Favorites.remove(this.favorite._id)
          console.log(this.favorite._id);

            // _id: this.apartmentFind._id

          };
        }
      // })
      // this.helpers({
      //   findId() {
      //     return Meteor.userId();
      //   }
      // });
    // }
  }

  const name = 'removeFavorite';

  // create a module
  export default angular.module(name, [
    angularMeteor,
    // uiRouter,
  ]).component(name, {
    template,
    bindings: {
      favorite: '<'
    },
    controllerAs: name,
    controller: RemoveFavorite
  });
