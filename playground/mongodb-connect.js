const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://shashank:nfstherun@ds163758.mlab.com:63758/todo_app', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to Mongodb server');

  db.collection('Todo').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Sunny',
  //   age: 22,
  //   location: 'Varanasi'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to create new user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
