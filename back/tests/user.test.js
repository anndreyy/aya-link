const GetUser = require('../api/domains/GetUser');
const UpdateUser = require('../api/domains/UpdateUser');
const UserModel = require('../api/models/user');

const usernameTest = 'fly';

test('Get User', async () => {
    const user = await GetUser(usernameTest);
    expect(user.username).toBe(usernameTest);
});

test('Update User', async () => {
    const user = await GetUser(usernameTest);

    // Novo nome com um numero aleatório
    user.name = user.username + Math.floor(Math.random() * 100);

    const updateUser = await UpdateUser(user, usernameTest);
    expect(updateUser.name).toBe(user.name);

    UserModel.Disconect();
});