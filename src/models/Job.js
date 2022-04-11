const { Model, DataTypes } = require('sequelize')

class Job extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.TEXT,
            price: DataTypes.DECIMAL(12,2),
            paid: DataTypes.BOOLEAN,
            paymentDate: DataTypes.DATE
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Contract, { foreignKey: 'contract_id', as: 'contract' })
    }
}

module.exports = Job