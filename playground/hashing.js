const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashPassword = '$2a$10$WTkkBiw7zm3QlglKF3LDRO5E2ywH0tS6Y7W7yxDPepafH.OFKovlW';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);


//
// var message = 'This is user number 3.';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`Hash: ${hash}`);
