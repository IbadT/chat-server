const router = require('express').Router();
const MessageController = require('../controllers/MessageController.js');



/**
 * @swagger
 * /api/messages/add:
 *   post:
 *     summary: Get message in the chat from user
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               chat_url:
 *                 type: integer
 *               author:
 *                 type: integer
 *               text:
 *                 type: string
 *     responses:  
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

// отправить сообщение в чат от лица пользователя 
router.post('/add', MessageController.add); // done


/**
 * @swagger
 * /api/messages/get:
 *   post:
 *     summary: Get message list in the chat
 *     description: POST
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             chat:
 *               type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

// получить список сообщений в конкретном чате ?post?
router.post('/get', MessageController.getMessages); // done 

module.exports = router;