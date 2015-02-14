var app = angular.module('routingApp').controller('productsCtrl', function($scope, $routeParams, productService){

	if($routeParams.id === 'shoes'){
		$scope.productData = productService.shoeData;
	}
	else if($routeParams.id === 'socks'){
		$scope.productData = productService.sockData;
	}
})