import userService from '../services/userService'
const readXlsxFile = require("read-excel-file")


let handleLogin = async (req, res) => {
    let { username, password } = req.body

    if (!username || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "Missinng Params"
        })
    }
    let userData = await userService.handleUserLogin(username, password)
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData.user ? userData.user : {}

    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMesssage: 'Missing required params',
            users: []
        })
    }
    let users = await userService.getAllUsers(id)
    return res.status(200).json({
        errCode: 0,
        errMesssage: 'OK',
        users
    })
    // return res.send('get all users')
}

let handleCreateUser = async (req, res) => {
    let message = await userService.createNewUser(req.body)
    return res.status(200).json(message)
}

let handleDeleteUser = async (req, res) => {
    console.log('req=====', req)
    let idUser = req.query.id
    console.log('User id', idUser)
    if (!idUser) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required idUser"
        })
    }
    let message = await userService.deleteUser(idUser)
    return res.status(200).json(message)
}

let handleEditUser = async (req, res) => {
    let data = req.body
    let message = await userService.updateUser(data)
    return res.status(200).json(message)
}
let handleGetAllCodes = async (req, res) => {
    try {
        let type = req.query.type
        let data = await userService.getAllCodes(type)

        return res.status(200).json({
            errCode: 0,
            errMesssage: 'OK',
            data
        })
    } catch (e) {
        console.log('get all codes: ', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error server"
        })
    }
}
let handleUpLoadFile = async (req, res) => {

    try {
        if (req.file === undefined) {
            return res.status(400).json({
                Code: 1,
                Messsage: 'Please upload an excel file!'
            })
        }

        let path = __dirname + "/.." + "/static/assets/uploads/" + req.file.filename
        readXlsxFile("E:/Learn/thanhda-portal-project/thanhdaportal/server/src/static/assets/uploads/1689314000422-bezkoder-Book1.xlsx")
            .then(() => {
                return res.status(200).json({
                    message: "ok"
                })
            })
        console.log(path)


        // workbook.xlsx.readFile(file_name)
        //     .then(function () {
        //         let worksheet = workbook.getWorksheet();
        //         worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        //             console.log("Row " + rowNumber + " = " + JSON.stringify(row.values))
        //         })
        //     })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    handleLogin,
    handleGetAllUsers,
    handleCreateUser,
    handleEditUser,
    handleDeleteUser,
    handleGetAllCodes,
    handleUpLoadFile,
}
