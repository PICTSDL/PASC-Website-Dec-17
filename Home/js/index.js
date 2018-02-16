 /*$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
      return false;
    });
  });*/


// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            
            .when('/pub', {
                templateUrl : '../Publications/index.html',
                controller  : 'pubController'
            })

            .when('/projects', {
                templateUrl : '../Projects/index.html',
                controller  : 'proController'
            })            

            .when('/sig', {
                templateUrl : '../SIG/index.html',
                controller  : 'sigController'
            })

            // route for the alumni page
            .when('/alumni', {
                templateUrl : '../Alumni/index.html',
                controller  : 'alumniController'
            })

            .when('/about', {
                templateUrl : '../AboutUs/index.html',
                controller  : 'aboutController'
            })            
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.title = 'Here I am';
    });

    scotchApp.controller('pubController', function($scope) {
        // create a message to display in our view
        $scope.title = 'PUBLICATIONS';
    });

    scotchApp.controller('proController', function($scope) {
        // create a message to display in our view
        $scope.title = 'PROJECTS';
    });

    scotchApp.controller('sigController', function($scope) {
        // create a message to display in our view
        $scope.title = 'SIG';
    });    

    scotchApp.controller('alumniController', function($scope) {
        // create a message to display in our view
        $scope.title = 'ALUMNI';
    });

    scotchApp.controller('aboutController', function($scope) {
        // create a message to display in our view
        $scope.title = 'ABOUT US';
    });    