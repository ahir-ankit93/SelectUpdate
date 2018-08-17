var app=angular.module("myCurd",[]);

app.controller("myCurdCtrl",function($scope){

   $scope.user={};

    $scope.removeUser = function(user){

        var removeUser = $scope.users.indexOf(user);
        $scope.users.splice(removeUser,1);
        localStorage.setItem("users", JSON.stringify($scope.users));
    }

    $scope.editUsers = function(user){
        $scope.users[$scope.editId] = user;
        localStorage.setItem("users", JSON.stringify($scope.users));
			$scope.editId = undefined;
			$scope.user = {};
        // var index=$scope.users.indexOf($scope.id);
        // console.log($scope.newUsername,$scope.users.indexOf($scope.id))
        // $scope.users[index].newUsername=$scope.newUsername;
        // $scope.users[index].newMobile=$scope.newMobile;
        // $scope.users[index].newDob=$scope.newDob;
        // $scope.users[index].newEmailid=$scope.newEmailid;
        // $scope.users[index].newPassword=$scope.newPassword;
        
    }

    $scope.selectEdit=function(index){
        $scope.editId = index;
			$scope.user = $scope.users[index];
        // var index=$scope.users.indexOf(newUsername);
        // var user=$scope.users[index];
        // $scope.newUsername=user.newUsername;
        // $scope.newMobile=user.newMobile;
        // $scope.newDob=user.newDob;
        // $scope.newEmailid=user.newEmailid;
        // $scope.newPassword=user.newPassword;

    }
    $scope.addUsers = function(user){
        console.log("user",user);
        $scope.users.push(user);
        localStorage.setItem("users", JSON.stringify($scope.users));
        console.log("#########################",$scope.users)
        $scope.user={}

        // $scope.users.push({
        //     id:$scope.user.id,
        //     newUsername:$scope.user.newUsername,
        //     newMobile:$scope.user.newMobile,
        //     newDob:$scope.user.newDob,
        //     newEmailid:$scope.user.newEmailid,
        //     newPassword:$scope.user.newPassword
        
        // })
        $scope.user.id='';
            $scope.user.newUsername='';
            $scope.user.newMobile='';
            $scope.user.newDob='';
            $scope.user.newEmailid='';
            $scope.user.newPassword='';

        console.log("users",$scope.users);
    }
    // $scope.users=[]


    // localStorage.getItem("users");
    if (localStorage.getItem("users") === null) {
        $scope.users = [];
        localStorage.setItem("items", JSON.stringify($scope.users));
      }else {
        $scope.users = JSON.parse(localStorage.getItem("users"));
      }
    // $scope.users = [

    //     {
    //         id:1,
    //         newUsername:"ankit",
    //         newMobile:8238888843,
    //         newDob:19/05/1993,
    //         newEmailid:"ahir.ankit93@gmail.com",
    //         newPassword:"123456"
    //     }
       
    // ]


});


