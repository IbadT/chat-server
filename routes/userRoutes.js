const router = require('express').Router();
const UserController = require('../controllers/UserController.js');


/**
 * @swagger
 * /api/users/add:
 *   post:
 *     summary: Add new user
 *     description: add new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               user_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad request
 *       '403':
 *         description: Forbidden
 */

// добавить нового пользователя 
router.post('/add', UserController.add); // done

// router.delete('/deleteUser', UserController.deleteUser);

module.exports = router;