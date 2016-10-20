var jacksonSite = angular.module('jacksonSite', ['ui.router']);

jacksonSite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrl'
  });
}]);
