/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  code: String,
  name: String,
  coordinates:[{
    latitude: String,
    longitude: String,
  }],
  address: String,
  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
  if(!this.name)
    throw err;
  if(!this.code)
    throw err;
  var currentListing = new Date();

  this.updated_at = currentListing;

  if(!this.created_at)
    this.created_at = currentListing;

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
