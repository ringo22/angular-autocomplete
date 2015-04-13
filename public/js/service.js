autocomplete_app.factory('autocompleteService', function($q, $timeout) {

    var names = [
        'Pedro',
        'Juan',
        'Roberto',
        'Adrian',
        'Polo',
        'Andrea',
        'Julieta',
        'Saul',
        'Jose Luis',
        'Rodrigo',
        'Arturo',
        'Jhonatan',
        'Alex',
        'David',
        'Max',
        'Alan',
        'Antonio',
        'Luis',
        'Gerardo',
        'Fernando',
        'Gustavo',
        'Daniel',
        'Raymundo',
        'Moises',
        'Angel'
    ];

    var lastnames = [
        'Lopez',
        'Gomez',
        'Motta',
        'Beck',
        'Watson',
        'Velbet',
        'Pool',
        'Bacon',
        'Barriga',
        'Dresden',
        'Claverol',
        'Mcloner',
        'Perez',
        'Lopez',
        'Casillas',
        'Marquez',
        'Blanco',
        'Raya',
        'Suarez',
        'Gutierrez'
    ];

    var jobs = [
        'Abogado',
        'Ingeniero',
        'Contador',
        'Vendedor',
        'Vendedor Sr',
        'Programador',
        'Seguridad',
        'Director',
        'Gerente',
        'Supervisor',
        'Cheff',
        'Comprador',
        'Comprador Sr',
        'RH'
    ];

    var users = [];

    for (var i = 1; i <= 500; i++) {
        var name = names[Math.floor(Math.random() * names.length)];
        var last_name = lastnames[Math.floor(Math.random() * lastnames.length)];

        users.push({
        id: i,
        name: name + ' ' + last_name,
        amount: (Math.random() + 100) * (Math.random() * (Math.random() * 1000)),
        job: jobs[Math.floor(Math.random() * jobs.length)]
        });
    }

    console.log(users);

    var searchUser = function(filter) {

        var deferred = $q.defer();
        var matches = [];

        if (filter.length > 0)
	    matches = users.filter(function(user) {
	    	if (user.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
                return true;
	    });

        $timeout(function(){
           deferred.resolve(matches);
        }, 100);

        return deferred.promise;
    };

    return {
        searchUser : searchUser
    }
})