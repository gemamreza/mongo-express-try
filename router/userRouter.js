const router = require('express').Router()
//const { userController } = require('./../controller')
const a = require('./../controller')

const { getAll} = a.userController

router.get('/', (req, res) => {
    res.send('<h1> Selamat Datang di Route User </h1>')
})

router.get('/users', getAll)
router.get('/userid/:id', a.userController.getUserById )
router.post('/adduser', a.userController.addData)
router.put('/:id', a.userController.updateData)
router.delete('/delete/:id', a.userController.deleteData)


module.exports = router