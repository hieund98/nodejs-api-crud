const coreModels = require('../model/index')
const shippingFeeModel = coreModels.ShippingFee
const feeService = {
    getAll: async () => {
        const where = {}
        return await shippingFeeModel.findAll({
            where: where
        })
    },
    getById: async (id, status) => {
        let where = {
            id: id
        }
        if (typeof status !== 'undefined') {
            where.status = status
        }
        return await shippingFeeModel.findOne({
            where: where
        })
    },
    getByType: async (type) => {
        let where = {
            type: type
        }

        return await shippingFeeModel.findOne({
            where: where
        })
    },
    create: async (fee) => {
        const exists = await shippingFeeModel.findOne({
            where: {
                type: fee.type
            }
        })
        if (exists) {
            return false
        }

        try {
            await fee.save()
        } catch (e) {
            console.log(e)
            return false
        }

        return true
    },
    update: async (fee, data) => {
        return await fee.update(data, {
            where: {
                id: fee.id
            }
        })
    }
}

module.exports = feeService
