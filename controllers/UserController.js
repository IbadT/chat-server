// import sentry
const UserService = require('../services/UserService.js');

class UserController {

    async add(req, res) {
        // { username: 'user_1 }
        try {
            const { user_name } = req.body;
            const finderUser = UserService.findUserByUserName(user_name);
            if(!finderUser) {
                const { id } = await UserService.createUser(user_name);
                res.send(id);
            } else {
                res.sendStatus(400);
            }
        } catch (error) {
            // Sentry.captureException(error);
            res.json(error);
        }
    };

    async deleteUser(req, res) {
        try {
            const { id } = req.userId;
            const deleteResult = await UserService.deleteUser(id);
            res.send(deleteResult);
        } catch (error) {
            // Sentry.captureException(error);
            res.json(error);
        }
    };
};

module.exports = new UserController();