    var myApp = angular.module('myApp',['ngRoute','firebase']);
    myApp.config(function($routeProvider)
    {
        console.log('Route');
        $routeProvider
        .when('/signin', {
            templateUrl:"pages/_signin.html"
        })
        .when('/signup', {
            templateUrl:"pages/_signup.html"
        })
        .otherwise({
            redirectTo:"signin"
        })
    })
    myApp.controller("myCtrl",function ($scope,$location,$firebaseObject) { 
        var ref = firebase.database().ref();
        $scope.db_data = $firebaseObject(ref);
        console.log($scope.db_data);
        console.log($location.path());
        //console.log($scope.db_data.context.body.firstChild.ownerDocument);
        $scope.validation = function(){
            var name = $("#username").val();
            var password = $("#password").val();
            if( name == password )
            {
                location.href = "dashboard.html";
            }
            else{
                alert("Login error!");
            }
        };
        // console.log(db_data);
     });