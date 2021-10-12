const { Post } = require('../model');

const postData = [{
        title: "Leet Code Prep Interview",
        body: "Leet Code leads the worlds interview prep sytem."
    },
    {
        title: "How to Get a Job as an Android Developer and Grow Into a Demanded Specialist",
        body: "Are you passionate about all those mobile apps hitting the scene each day and interested in becoming a proficient Android app developer? Good."
    },
    {
        title: "Want to avoid git's annoying password prompts for every push? Configure SSH keys for Github",
        body: "re you using HTTPS protocol to communicate between your local repos and Github? If yes"


    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;