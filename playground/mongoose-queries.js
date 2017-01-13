const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

const id = '58771b4c30ebe4d809f37d8c';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
