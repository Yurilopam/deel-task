const Contract = require('../models/Contract')
const { Op } = require("sequelize");

const findContractByIdAndProfileId = async (id, profile_id) => {
    const result = await Contract.findOne({
        where: {
            id,
            [Op.or]: [
                { contractor_id: profile_id },
                { client_id: profile_id }
            ]
        }
    })

    if (!result) throw new Error(`Couldn't find any contract with this id ${id}`)

    return result
}

const findAllContractsByProfileId = async (profile_id) => {
    const result = await Contract.findAll({
        where: {
            status: {
                [Op.not]: 'terminated'
            },
            [Op.or]: [
                { contractor_id: profile_id },
                { client_id: profile_id }
            ]
        }
    })

    if (!result) throw new Error(`Couldn't find any contract for this profile`)

    return result
}

module.exports = { findContractByIdAndProfileId, findAllContractsByProfileId }