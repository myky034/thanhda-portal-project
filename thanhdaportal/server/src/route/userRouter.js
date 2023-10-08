import exoress from 'express'
import userController from '../controllers/userController'
const upload = require("../middleware/upload")

let router = exoress.Router()

router.put('/edit', userController.handleEditUser)
router.delete('/delete', userController.handleDeleteUser)
router.post('/create', userController.handleCreateUser)
router.get('/all-users', userController.handleGetAllUsers)
router.post('/upload', upload.single("file"), userController.handleUpLoadFile)
module.exports = router
