const coreModels = require('../model/index')
const userModel = coreModels.User
const userService = {
    createUser : async({username, password}) => {
        return await userModel.create({ username, password });
    },

    getAll : async() => {
        return await userModel.findAll();
    },
    findOne : async(obj) => {
        return await userModel.findOne({
            where: obj,
        });
    },
    findById : async(id) => {
        return await userModel.findOne({
            where: {id: id},
        });
    },
}

module.exports = userService
