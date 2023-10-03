const { MessageModel } = require('../models/_models.js');

class MessageService {
    async add(obj) {
        return new Promise((res, rej) => {
            MessageModel.create(obj).then(response => {
                res(response);
            });
        });
    };

    async getChatsMessagesById(id) {
        return new Promise((res, rej) => {
            MessageModel.findAll({ where: {}}).then(messages => {
                res(messages);
            })
        })
    }
};

module.exports = new MessageService();