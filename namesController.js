var app = angular.module("myApp",[]);
app.controller("namesCtrl",function($scope){
  $scope.firstName = "Pramathesh";
  $scope.lastName = "Malshe";
  $scope.fullName = function(){
    return $scope.firstName + ' '+$scope.lastName;
  }
  $scope.names = [
    {name:"Cameron Bancroft", country:"Australia"}, {name:"James Vince", country: "England"}, {name:"James Anderson", country: "England"}, {name:"Nathan Lyon", country: "Australia"}
  ];
});
