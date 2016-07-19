function MainController ($scope) {
  $scope.tasks    = [];
  $scope.count = 0
  $scope.value = '0 likes'
  $scope.addone = function(count){
  	
    if ($scope.count == 0){
    
    let newcount = $scope.count + 1;
    $scope.count = $scope.count + 1;	
    $scope.value = newcount + ' like';

    } else { let newcount = $scope.count + 1;	
    	    $scope.count = $scope.count + 1;	
    $scope.value = newcount + ' likes';

    }
  	
  }
  console.log($scope.count);
}

MainController.$inject = ['$scope'];
export {MainController};