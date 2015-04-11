autocomplete_app.factory('FlightDataService', function($q, $timeout) {

    var searchAirlines = function(searchFilter) {

        console.log('Searching airlines for ' + searchFilter);

        var deferred = $q.defer();

	    var matches = airlines.filter( function(airline) {
	    	if(airline.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
	    })

        $timeout( function(){

           deferred.resolve( matches );

        }, 100);

        return deferred.promise;

    };

    return {

        searchAirlines : searchAirlines

    }
})