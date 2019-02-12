angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      var newListEntry = {
        name: $scope.newListing.name,
        code: $scope.newListing.code,
        address: $scope.newListing.address
      };

      $scope.listings.push($scope.newListing);
      $scope.newListing = {};

      Listings.create(newListEntry).then(function(response) {
        $scope.newListing.name = '';
        $scope.newListing.code = '';
        $scope.newListing.address = '';
      }, function(err){
        $scope.err = 'Listing not saved:' + err;
      });
    /*
     *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
    };

    $scope.deleteListing = function(index) {
      var entry = $scope.listings[index];
      var entryID = entry._id;

      Listings.delete(entryID).then(function(response) {
        console.log('unable to delete')},
        function(err) {console.log('error')});
        $scope.listings.splice(index,1);
      };

	   /*
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);