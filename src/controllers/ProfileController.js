const { findSumJobsPriceNotTerminatedNotPaidByProfileId } = require('../repositories/JobRepository')
const { validateAndDepositClientMoney } = require('../services/ProfileService')

module.exports = {
    async clientDeposit(req, res) {
        const { amount } = req.params
        const profile = req.profile

        try {
            const sumJobsPrice = await findSumJobsPriceNotTerminatedNotPaidByProfileId(profile.id)

            await validateAndDepositClientMoney(amount, profile, sumJobsPrice)

            return res.json(profile)
        } catch (error) {
            res.statusMessage = error
            res.status(422)
            return res.json({ error: error.message })
        }
    }
}