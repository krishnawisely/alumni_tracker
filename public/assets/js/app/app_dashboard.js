var app = angular.module("myApp",['ngRoute','firebase']);
app.config(function($routeProvider){
    $routeProvider
    .when('/dashboard', {
        templateUrl:"pages/_dashboard.html"
    })
    .when('/user', {
        templateUrl:"pages/_user.html"
    })
    .otherwise({
        redirectTo:"/dashboard"
    })
});
