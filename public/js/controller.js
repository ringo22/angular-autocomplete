autocomplete_app.controller('autocompleteCtrl', ['$scope', 'autocompleteService', function($scope, autocompleteService) {

	$scope.view = {
        title: 'Ionic autocomplete',
        users_filter: [],
        search: '',
        users: []
    };

    $scope.search = function() {
    	autocompleteService
        .searchUser($scope.view.search)
        .then(function(matches) {
			$scope.view.users_filter = matches;
		});
    };

    $scope.selected = function(user) {
        $scope.view.users.push(user);

        $scope.view.users_filter = [];
        $scope.view.search = '';
    };

}]);