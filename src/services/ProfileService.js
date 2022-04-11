const { calcPercentage } = require('../utils/math')

const validateAndDepositClientMoney = async (amount, profile, sumJobsPrice) => {
    const percentSumJobs = calcPercentage(sumJobsPrice, 25)

    if (amount > percentSumJobs) throw new Error(`Deposit cannot be more than 25% of the total jobs price to be paid`)

    const client_new_balance = profile.balance + parseInt(amount)

    await profile.update({ balance: client_new_balance  })

    return { percentSumJobs, client_new_balance }
}

module.exports = { validateAndDepositClientMoney }