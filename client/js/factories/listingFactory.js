angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://brianbootcamp4.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://brianbootcamp4.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
      return $http.delete('https://brianbootcamp4.herokuapp.com/api/listings/' + id);
	   /**TODO
        return result of HTTP delete method
       */

    }
  };

  return methods;
});
