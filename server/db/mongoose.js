var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://shashank:nfstherun@ds163758.mlab.com:63758/todo_app' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
