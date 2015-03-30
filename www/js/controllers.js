angular.module('starter.controllers', ['ngRoute'])

.controller('DashCtrl', function($scope) {
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


