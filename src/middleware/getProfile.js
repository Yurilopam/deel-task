const Profile = require('../models/Profile')

const getProfile = async (req, res, next) => {
    const profile = await Profile.findByPk(req.get('profile_id'))
    if (!profile) return res.status(401).end()
    req.profile = profile
    next()
}
module.exports = { getProfile }