const { findAllActiveJobsNotPaidByProfileId, findJobActiveNotPaidByIdAndProfileId } = require('../repositories/JobRepository')
const { payJob } = require('../services/JobService')

module.exports = {
    async indexUnpaid(req, res) {
        try {
            const profile_id = req.profile.id
    
            const jobs = await findAllActiveJobsNotPaidByProfileId(profile_id)
    
            return res.json(jobs)
        } catch (error) {
            res.statusMessage = error
            return res.status(422).end()
        }
    },

    async payPayment(req, res) {
        const { job_id } = req.params
        const profile = req.profile
        try {
            const job = await findJobActiveNotPaidByIdAndProfileId(job_id, profile.id)
    
            await payJob(profile, job)
    
            return res.json(job)
        } catch (error) {
            res.statusMessage = error
            return res.status(422).end()
        }

    }
}