//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://brianh_bc4:tennis123@ds161225.mlab.com:61225/hbrian_bc3', //place the URI of your mongo database here.
  },
  port: 8080
};
