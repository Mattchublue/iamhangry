const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'FrankGallagher',
    email: 'frank@shameless.com',
    password: 'password123'
  },
  {
    username: 'PeterGriffin',
    email: 'thebirdistheword@spoonerstreet.com',
    password: 'password123'
  },
  {
    username: 'HomerSimpson',
    email: 'DOH@springfield.com',
    password: 'password123'
  },
  {
    username: 'norm',
    email: 'heynorm@cheers.com',
    password: 'password123'
  },
  {
    username: 'bender',
    email: 'bender@futurama.com',
    password: 'password123'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
