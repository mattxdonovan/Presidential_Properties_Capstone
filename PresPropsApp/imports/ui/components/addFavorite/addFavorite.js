// import angular from 'angular';
// import angularMeteor from 'angular-meteor';
// import uiRouter from 'angular-ui-router';
//
// import { Meteor } from 'meteor/meteor';
//
// import template from './userFavorites.html';
// import { Favorites } from '../../../api/favorites';
// import { Apartments } from '../../../api/apartments';
//
// class AddFavorite {
//   constructor() {
//     this.favorite = {};
//   }
//
//   $reactive(this).attach($scope);
//
//   submit() {
//     this.favorite.owner = Meteor.userId();
//     Favorites.insert(this.favorite);
//     this.reset();
//   }
//   const name = 'addFavorite';
//
//   // create a module
//   export default angular.module(name, [
//     angularMeteor
//   ]).component(name, {
//     template,
//     uiRouter,
//     controllerAs: name,
//     controller: AddFavorite
//   })
//     .config(config);
//
//   function config($stateProvider) {
//     'ngInject';
//     $stateProvider
//       .state('apartments', {
//         url: '/apartments/:apartmentId',
//         template: '<add-favorite></add-favorite>'
//       });
//   }
