const {Router} = require('express')
const router = Router()

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller')


router.route('/').get(getNotes) 
router.route('/').post(createNote)
router.route('/:id').get(getNote)
router.route('/:id').put(updateNote)
router.route('/:id').delete(deleteNote)


module.exports = router