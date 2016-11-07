'use strict';

angular.module('tripzyApp.cities', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('cities', {
        url: '/cities/{id}',
        controller: 'citiesController',
        templateUrl: 'app/scripts/modules/cities/views/cities.html'
      });

  });
