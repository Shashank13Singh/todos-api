const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');

Todo.remove({}).then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({text: 'something to do'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('adgsahrhye4t34hrh3').then((todo) => {
  console.log(todo);
});
