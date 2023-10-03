const MessageService = require('../services/MessageService.js');
const ChatService = require('../services/ChatService.js');

class MessageController {
    async add(req, res) {
        // { chat: 'chat_id', author: 'user_id', text: 'hi' }
        try {
            const { chat, author, text } = req.body;
            const { id } = await MessageService.add({ chat, author, text });
            res.send(id);
        } catch (error) {
            // Sentry.captureException(error);
            res.json(error);
        }
    };

    async getMessages(req, res) {
        // { chat: 'chat_id' }      
        try {
            const { chat } = req.body;
            // const { id } = await ChatService.getChat(chat);
            const messages = await MessageService.getChatsMessagesById(id);
            res.send(messages);
        } catch (error) {
            // Sentry.captureException(error);
            res.json(error);
        };
    };
};

module.exports = new MessageController();