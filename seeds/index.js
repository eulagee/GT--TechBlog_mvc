const seedPosts = require('./postData');
const seedUser = require('./userData');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');


//   await seedPost
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');


//  await seedUSer
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();