const { User } = require('../models');

const userdata =
[
  {
    "username": "Jay",
    "password": "password"
  },
  {
    "username": "Sage",
    "password": "password"
  },
  {
    "username": "Haley",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
