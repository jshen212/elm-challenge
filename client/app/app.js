var elmApp = angular.module('elmApp', ['ui.router', 'youtube-embed'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'dashboardCtrl'
  });
  $urlRouterProvider.otherwise('/dashboard');
});
