const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB servers');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('587478319c8fdc129824f5f8')}, {
  //   $set: {
  //     text: 'Eat lunch',
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({name: 'sunny'}, {
    $set: {
      name: 'Shashank'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});
