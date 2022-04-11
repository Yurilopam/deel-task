const { findProfileByPk } =  require('../repositories/ProfileRepository')

const payJob = async (profile, job) => {
    if (profile.balance < job.price) throw new Error(`Profile balance is less than job price`)
    
    const client_new_balance = profile.balance - job.price
    const contractor = await findProfileByPk(job.contract.contractor_id)
    const contractor_new_balance = job.price + contractor.balance
    
    await job.update({ paid: true, paymentDate: new Date() })
    await profile.update({ balance: client_new_balance  })
    await contractor.update({ balance: contractor_new_balance  })
}

module.exports = { payJob }