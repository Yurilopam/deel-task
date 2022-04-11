const sequelize = require('../database')
const { findMostProffitProfession, listClientsHighestSpending } = require('../repositories/AdminRepository')

module.exports = {
    async indexMostProffitProfession(req, res) {
        const { start, end } = req.query
        const mostProffitProfession = await findMostProffitProfession(start, end)
        res.json(mostProffitProfession)
    },

    async showClientsHighestSpending(req, res) {
        const { start, end, limit } = req.query
        const clientsHighestSpenging = await listClientsHighestSpending(start, end, limit)
        res.json(clientsHighestSpenging)
    }
}