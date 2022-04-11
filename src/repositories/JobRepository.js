const Job = require('../models/Job')
const { Op } = require("sequelize")

const findSumJobsPriceNotTerminatedNotPaidByProfileId = async (profile_id) => {
    console.log('ENTREI')
    const result = await Job.sum('price', {
        where: {
            paid: {
                [Op.not]: true
            }
        },
        include: {
            association: 'contract',
            where: {
                status: {
                    [Op.not]: 'terminated'
                },
                client_id: profile_id
            }
        }
    })

    if (result) throw new Error(`Couldn't find any jobs for this profile`)
    
    return result
}

const findAllActiveJobsNotPaidByProfileId = async (profile_id) => {
    const result = await Job.findAll({
        where: {
            paid: {
                [Op.not]: true
            }
        },
        include: {
            association: 'contract',
            where: {
                status: {
                    [Op.eq]: 'in_progress'
                },
                [Op.or]: [
                    { contractor_id: profile_id },
                    { client_id: profile_id }
                ]
            }
        }
    })

    if (!result) throw new Error(`Couldn't find any jobs for this profile`)
    
    return result
}

const findJobActiveNotPaidByIdAndProfileId = async (job_id, profile_id) => {
    const result = await Job.findOne({
        where: {
            id: job_id,
            paid: {
                [Op.not]: true
            }
        },
        include: {
            association: 'contract',
            where: {
                status: {
                    [Op.eq]: 'in_progress'
                },
                client_id: profile_id
            }
        }
    })
    
    if (!result) throw new Error(`Couldn't find any jobs for this profile`)
    
    return result
}

module.exports = { findSumJobsPriceNotTerminatedNotPaidByProfileId, findAllActiveJobsNotPaidByProfileId, findJobActiveNotPaidByIdAndProfileId }