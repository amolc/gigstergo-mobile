starter
	.controller( "biddingProjectsCtrl" , [
		"$scope",
		"$http",
		function controller ( $scope , $http ) {
			$http.get("http://localhost:8080/get/projects")
				.success( function onSuccess(response ){
					_.map( response , function ( each , err ){
						console.log( each);
					});
				});
			}
	]);