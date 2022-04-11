const { findContractByIdAndProfileId, findAllContractsByProfileId } = require('../repositories/ContractRepository')

module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params
            const profile_id = req.profile.id
    
            const contract = await findContractByIdAndProfileId(id, profile_id)
    
            return res.json(contract)
        } catch (error) {
            res.statusMessage = error
            return res.status(422).end()
        }
    },



    async index(req, res) {
        try {
            const profile_id = req.profile.id
    
            const contracts = await findAllContractsByProfileId(profile_id)
    
            return res.json(contracts)
        } catch (error) {
            res.statusMessage = error
            return res.status(422).end()
        }
    },
}