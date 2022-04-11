const { Model, DataTypes } = require('sequelize')

class Profile extends Model {
    static init(sequelize) {
        super.init({
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            profession: DataTypes.STRING,
            balance: DataTypes.DECIMAL(12,2),
            type: DataTypes.ENUM('client', 'contractor')
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Contract, { foreignKey: 'contractor_id', as: 'contractor_contracts' })
        this.hasMany(models.Contract, { foreignKey: 'client_id', as: 'client_contracts' })
    }
}

module.exports = Profile