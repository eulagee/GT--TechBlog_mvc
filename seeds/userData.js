const { User } = require('../model');

const userData = [{
        name: "Atsuko",
        email: "atsuko@hotmail.com",
        password: "password01234",
    },
    {
        name: "Takuya",
        email: "takuya@hotmail.com",
        password: "password01234",
    },
    {
        name: "Jesson",
        email: "jesson@hotmail.com",
        password: "password01234",
    }
];

const seedUser = () => User.bulkCreate(userData,{
    individualHooks:true, 
    returning:true, 
});

module.exports = seedUser;