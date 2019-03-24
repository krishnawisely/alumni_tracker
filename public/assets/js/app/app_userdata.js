app.controller("userCtrl",function ($scope,$http,$firebaseObject) {
    $scope.userdata = [];
    $http.get("assets/localdata/userdata.json")
    .then(function(response){
        console.log(JSON.stringify(response));
        $scope.userdata = response.data; 
        var ref = firebase.database().ref();
        $scope.db_data = $firebaseObject(ref);
        // $scope.name = "krishna";
        //localStorage.setItem("USERS",JSON.stringify(response));
        //localStorage.removeItem("USERS");
    });
  });
//   app.controller("userCtrl",function ($scope,$firebaseObject) { 
//     var ref = firebase.database().ref();
//     $scope.db_data = $firebaseObject(ref);
//  });