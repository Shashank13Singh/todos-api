const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB servers');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').deleteMany({text: 'something new to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'something new to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({text: 'something new to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'czar'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('587490da4de4222a98c30fd7')}).then((result) => {
    console.log(result);
  });

});
