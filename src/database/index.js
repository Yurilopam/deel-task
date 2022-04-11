const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Profile = require('../models/Profile')
const Contract = require('../models/Contract')
const Job = require('../models/Job')

const connection = new Sequelize(dbConfig)

Profile.init(connection)
Contract.init(connection)
Job.init(connection)

Profile.associate(connection.models)
Contract.associate(connection.models)
Job.associate(connection.models)

module.exports = connection