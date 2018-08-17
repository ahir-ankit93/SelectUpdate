var app= angular.module("myApp",[])

app.controller("myAppCtrl",function($scope, $http){
    $http.get("https://api.github.com/users").then(function(item){
        $scope.users=item.data;
    })
})