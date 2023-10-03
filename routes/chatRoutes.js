const router = require('express').Router();
const ChatController = require('../controllers/ChatController.js');



/**
 * @swagger
 * /api/chats/get:
 *   post:
 *     summary: GET new chat
 *     description: get new chat
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               users:
 *                 type: array
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad request
 *       '403':
 *         description: Forbidden
 */

// получить список чатов конкретного пользователя ?post?
router.post('/get', ChatController.getChatsByUserId) // done


/**
 * @swagger
 * /api/chats/add:
 *   post:
 *     summary: Add new chat with users
 *     description: Post
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *               users:
 *                 type: array
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */


// создать новый чат между пользователями 
router.post('/add', ChatController.add); // done



module.exports = router;