const UserModel = require('./api/models/user');

const newUser = new UserModel.User({ 
    name: 'Fly',
    email: 'email@fly.com',
    userName: 'fly',
    password: '123456',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "ATIVO",
    role: "ADMIN",
    token: "",
    tokenExpires: new Date()
 });
newUser.save().then(() => console.log('meow'));