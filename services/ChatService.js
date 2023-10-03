const { ChatUsers } = require('../models/_models.js');
const { ChatModel } = require('../models/_models.js');

class ChatService {
    async add(name, users_array) {
        return new Promise((res, rej) => {
            ChatModel.create({ name, users_array }).then(createdChat => {
                res(createdChat);
            });
        });
    };

    async getChatsByUserId(user_id) {
        return new Promise((res, rej) => {
            ChatUsers.findAll({ where: { user_id: user_id }}).then(chats => {
                res(chats);
            });
        });
    };

    async getChat(chat_id) {
        return new Promise((res, rej) => {
            ChatService.findOne({ where: { id: chat_id }}).then(chat => {
                res(chat);
            });
        });
    };
};

module.exports = new ChatService();