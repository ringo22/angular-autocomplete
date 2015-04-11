autocomplete_app.controller('autocompleteCtrl', ['$scope', 'FlightDataService', function($scope, FlightDataService) {

	$scope.view = {
        title: 'Ionic autocomplete',
        result: {
            "airlines": [],
            "search": ''
        }
    };

    $scope.search = function() {

    	FlightDataService.searchAirlines($scope.view.result.search).then(
    		function(matches) {
    			$scope.view.result.airlines = matches;
    		}
    	)
    }

}]);