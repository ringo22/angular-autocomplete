autocomplete_app.controller('autocompleteCtrl', ['$scope', 'autocompleteService', function($scope, autocompleteService) {

	$scope.view = {
        title: 'Ionic autocomplete',
        result: {
            "users": [],
            "search": ''
        },
        users: []
    };

    $scope.search = function() {
    	autocompleteService
        .searchUser($scope.view.result.search)
        .then(function(matches) {
			$scope.view.result.users = matches;
		});
    };

    $scope.selected = function(user) {
        $scope.view.users.push(user);

        $scope.view.result.users = [];
        $scope.view.result.search = '';
    };

}]);