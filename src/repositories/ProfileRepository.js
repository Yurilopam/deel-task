const Profile = require('../models/Profile')

const findProfileByPk = async (id) => {
    const result = await Profile.findByPk(id)
    
    if (!result) throw new Error(`Couldn't find any profile for this id`)

    return result
}

module.exports = { findProfileByPk }