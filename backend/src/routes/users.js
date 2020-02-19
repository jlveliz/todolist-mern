const {Router} = require('express')
const router = Router()

const usrCtrl = require('../controllers/users.controller')

router.route('/').get(usrCtrl.getUsers)
router.route('/').post(usrCtrl.createUser)
router.route('/:id').get(usrCtrl.getUser)
router.route('/:id').put(usrCtrl.updateUser)
router.route('/:id').delete(usrCtrl.deleteUser)

module.exports = router