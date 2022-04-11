const { Model, DataTypes } = require('sequelize')

class Contract extends Model {
    static init(sequelize) {
        super.init({
            terms: DataTypes.TEXT,
            status: DataTypes.ENUM('new','in_progress','terminated')
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Profile, { foreignKey: 'contractor_id', as: 'contractor' })
        this.belongsTo(models.Profile, { foreignKey: 'client_id', as: 'client' })
        this.hasMany(models.Job, { foreignKey: 'contract_id', as: 'jobs' })
    }
}

module.exports = Contract