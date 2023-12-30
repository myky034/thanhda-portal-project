import db from "../models/index"



let getAllCodes = (inputType) => {
    return new Promise(async (resolve, reject) => {
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
    getAllCodes
}
