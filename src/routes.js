const express = require('express')

const routes = express.Router()

const ProfileController = require('./controllers/ProfileController')
const ContractController = require('./controllers/ContractController')
const JobController = require('./controllers/JobController')
const AdminController = require('./controllers/AdminController')

const { getProfile } = require('./middleware/getProfile')

routes.get('/contracts/:id', getProfile, ContractController.show)
routes.get('/contracts', getProfile, ContractController.index)
routes.get('/jobs/unpaid', getProfile, JobController.indexUnpaid)
routes.post('/jobs/:job_id/pay', getProfile, JobController.payPayment)
routes.post('/balances/deposit/:amount', getProfile, ProfileController.clientDeposit)
routes.get('/admin/best-profession', AdminController.indexMostProffitProfession)
routes.get('/admin/best-clients', AdminController.showClientsHighestSpending)

module.exports = routes