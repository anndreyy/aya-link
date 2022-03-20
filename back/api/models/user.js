require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect(process.env.MONGO_URL);


const User = mongoose.model('User', {
    name: String,
    email: String,
    username: String,
    password: String,
    createdAt: Date,
    updatedAt: {type : Date, default : null},
    status: {type : String, default : null},
    role: {type : String, default : null},
    token: {type : String, default : null},
    tokenExpires: {type : Date, default : null},
    // links: [{
    //     rel: String,
    //     href: String
    //     description: String
    // }]
    links: [{
        href: String,
        description: {type : String, default : null},
        summary: {type : String, default : null}
    }]

});

const Create = async (user) => {
    user.createdAt = new Date();
    user.updatedAt = null;
    user.status = 'ACTIVE';
    user.role = 'USER';
    user.token = null;
    user.tokenExpires = null;
    user.password = await bcrypt.hash(user.password, 10);    


    const newUser = new User(user);
    return await newUser.save();
}

const Update = async (userExist, user) => {
    userExist.updatedAt = new Date();

    userExist.name = user.name || userExist.name;
    userExist.email = user.email || userExist.email;
    userExist.password = await bcrypt.hash(user.password, 10) || userExist.password;
    userExist.status = user.status || userExist.status;
    userExist.role = user.role || userExist.role;
    userExist.token = user.token || userExist.token;
    userExist.tokenExpires = user.tokenExpires || userExist.tokenExpires;
    userExist.links = user.links || userExist.links;

    return await userExist.save();
}


exports.User = User;
exports.Create = Create;
exports.Update = Update;
exports.Disconect = () => {
    mongoose.disconnect();
}

