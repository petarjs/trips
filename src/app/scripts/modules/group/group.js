'use strict';

angular.module('tripzyApp.group', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('group', {
        url: '/group/{id}',
        controller: 'groupController',
        templateUrl: 'app/scripts/modules/group/views/group.html'
      });

  });
