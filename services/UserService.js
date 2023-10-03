const { UserModel } = require('../models/_models.js');

class UserService {
    async findUserByUserName(user_name) {
        return new Promise((res, rej) => {
            UserModel.findOne({ where: { username: user_name }}).then(user => {
                res(user);
            });
        });
    };

    async createUser(username) {
        return new Promise((res, rej) => {
            UserModel.create({ username }).then(createdUser => {
                res(createdUser);
            }) ;
        });
    };

    async deleteUser(userId) {
        return new Promise((res, rej) => {
            UserModel.destroy({ where: { id: userId } }).then(deleteResult => {
                res(deleteResult);
            })
        })
    }
};

module.exports = new UserService();