import db from "../models/index"
import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(10)

let handleUserLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}

            let isExit = await checkUserEmail(username)
            if (isExit) {
                //user already exist
                let user = await db.User.findOne({
                    where: { username: username },
                    raw: true
                })
                if (user) {
                    //compare password
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0
                        userData.errMessage = 'ok'
                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3
                        userData.errMessage = "Wrong password"
                    }
                } else {
                    userData.errCode = 2
                    userData.errMessage = `User's isn't not found`
                }
            } else {
                userData.errCode = 1
                userData.errMessage = `Your's username not exist in your system`
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

let checkUserEmail = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { username: username }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = ''
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: [`password`]
                    }

                })
            } if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    attributes: {
                        exclude: [`password`]
                    },
                    where: { id: userId }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let hasUserPasssword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt)
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let emailExist = await checkUserEmail(data.username)
            if (emailExist) {
                resolve({
                    errCode: 1,
                    errMessage: 'Username is exists'
                })
            } else {
                let hasPasswordFromBcrypt = await hasUserPasssword(data.password)
                await db.User.create({
                  firstName: data.firstName,
                  middleName: data.middleName,
                  lastName: data.lastName,
                  username: data.username,
                  password: hasPasswordFromBcrypt,
                  email: data.email,
                  birthday: data.birthday,
                  city: data.city,
                  baptismDay: data.baptismDay,
                  baptismPlace: data.baptismPlace,
                  address: data.address,
                  phoneNumber: data.phoneNumber,
                  gender: data.gender === "1" ? true : false,
                  roleId: data.roleId,
                  holyName: data.holyName,
                  oldClass: data.oldClass,
                  newClass: data.newClass,
                  holyNameFather: data.holyNameFather,
                  fatherName: data.fatherName,
                  holyNameMother: data.holyNameMother,
                  motherName: data.motherName,
                });
                resolve({
                    errCode: 0,
                    message: 'OK'
                })
            }
        } catch (e) {
            console.log('create user error: ', e)
            reject(e)
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.User.findOne({
            where: { id: userId }
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`
            })
        }
        console.log(user)
        await db.User.destroy({
            where: { id: userId }
        })
        resolve({
            errCode: 0,
            message: `The user is deleted`
        })
    })
}

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required params'
                })
            }
            let user = await db.User.findOne({
                attributes: {
                    exclude: [`password`]
                },
                where: { id: data.id },
                raw: false
            })
            console.log('Data update User by id: ', data)
            console.log('find one  User by id: ', user)
            if (user) {
                user.firstName = data.firstName //user.firstName thuộc tính từ db
                user.middleName = data.middleName
                user.lastName = data.lastName   // data.firstName thuộc tính từ form edit
                user.username = data.username
                user.email = data.email
                user.city = data.city
                user.baptismDay = data.baptismDay
                user.baptismPlace = data.baptismPlace
                user.address = data.address
                user.phoneNumber = data.phoneNumber
                user.gender = data.gender
                user.image = data.image
                user.roleId = data.roleId
                user.holyName = data.holyName
                user.oldClass = data.oldClass
                user.newClass = data.newClass
                user.holyNameFather = data.holyNameFather
                user.fatherName = data.fatherName
                user.holyNameMother = data.holyNameMother
                user.motherName = data.motherName

                await user.save()
                resolve({
                    errCode: 0,
                    message: 'Update user succeeds',
                    data: user
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `The user isn't exist`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllCodes = (inputType) => {
    return new Promise(async (resolve, reject) => {
        console.log('serviceget all code')
        try {

            if (!inputType) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                res = await db.Allcode.findAll({
                    where: { type: inputType }
                })
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin,
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUser,
    getAllCodes
}
