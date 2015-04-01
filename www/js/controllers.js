angular.module('starter.controllers', ['ngRoute'])

.controller('DashCtrl', function($scope,$state,$ionicPopup, $timeout) {
$scope.bidders=false;
$scope.bidding=false;
$scope.isbiddershow=function(){
	if($scope.bidders==true){
		$scope.bidders=false;
	}else{
		$scope.bidders=true;
	}
};
$scope.isbiddingshow=function(){
	if($scope.bidding==true){
		$scope.bidding=false;
	}else{
		$scope.bidding=true;
	}
};

$scope.bidbtnclick=function(){
  $state.go('login_signup_screen');
};


   $scope.showAlert = function() {
    console.log('hi');
     var alertPopup = $ionicPopup.alert({
       title: 'Forget Password?',
       template: 'Enter your email address and we ll send you instructions on how to create a new password.'
     });
     alertPopup.then(function(res) {
     
     });
   };


})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })




.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


