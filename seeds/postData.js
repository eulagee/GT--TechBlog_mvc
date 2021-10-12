const { Post } = require('../models');

const postData = [
  {
    title: "Leet Code Prep Interview",
    body: "Leet Code leads the worlds interview prep sytem."
  },
  {
    title: "How to Get a Job as an Android Developer and Grow Into a Demanded Specialist",
    body: "Are you passionate about all those mobile apps hitting the scene each day and interested in becoming a proficient Android app developer? Good. I’m going to give you some useful hints on how to advance your skills and get hired for your dream job."
  },
  {
    title: "Want to avoid git's annoying password prompts for every push? Configure SSH keys for Github",
    body: "re you using HTTPS protocol to communicate between your local repos and Github? If yes, then just think–all of that time you spent entering your email address and password into the terminal every time you push a commit could have been spent coding. Guess what? you could have saved all that time by simply enabling SSH for your GitHub account. In this post, we will try to create an SSH key and add it to your Github account for "better" way of GitHub authentication."
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;