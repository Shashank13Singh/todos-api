var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// 'mongodb://shashank:nfstherun@ds163758.mlab.com:63758/todo_app'
mongoose.connect(process.env.MONGOLAB_PINK_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
