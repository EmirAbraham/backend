const { Userdev, Socialpost } = require('../../db.js');

const getAdmins = async (req, res) => {

    try {
        const { status } = req.user;

        if (status !== 'superadmin' && status !== 'admin' ) {
            return res.status(403).json({errors: [{ msg: "Solo los superadmins y admins pueden obtener a todos los usuarios"}]});
        }

        const countAllUsers = await Userdev.count();
        const countAllPost = await Socialpost.count();
        const results = await Userdev.findAll({
            attributes: [
                'id',
                'name',
                'nickName',
                'status',
                'email',
                'active'
            ]
        });

        return res.status(200).json({ countAllUsers, countAllPost, results });

    } catch (error) {
        res.status(500).json({ errors: [{ msg: error.message }] });
    }
}

module.exports = { getAdmins };