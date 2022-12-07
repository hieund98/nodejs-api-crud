const shippingFeeService = require('../services/shippingFeeService')
const coreModels = require("../model/index")
const { validationResult } = require("express-validator")

module.exports = {
    index: async (req, res) => {
        const fees = await shippingFeeService.getAll()

        return res.json({
            status: 1,
            code: 200,
            data: fees
        });
    },
    findOne: async (req, res) => {
        const fee = await shippingFeeService.getById(req.params.id)

        return res.json({
            status: 1,
            code: 200,
            data: fee
        });
    },
    store: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 0,
                code: 400,
                errors: errors.array()
            })
        }

        const type = req.body.type.toString()
        const price = req.body.price

        const fee = coreModels.ShippingFee.build({
           type: type,
           price: price
        })
        const results = await shippingFeeService.create(fee)

        return res.json({
            status: 1,
            code: 200,
            message: "created",
        });
    },
    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 0,
                messages: errors.array()
            })
        }

        const fee = coreModels.ShippingFee.build({
            id: req.params.id,
            price: req.body.price,
            type: req.body.type
        })

        const updateResult = await shippingFeeService.update(fee, {
            price: req.body.price,
            type: req.body.type
        })

        const data = fee;

        return res.json({
            status: 1,
            code: 200,
            message: 'ok',
            data
        }).end()
    },
    delete: async (req, res) => {
        return res.json({
            status: 1,
            code: 200,
            data: []
        });
    }
}
