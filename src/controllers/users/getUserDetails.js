const { Userdev, Socialpost, Socialcomment } = require('../../db.js');

const getUserDetails = async (id) => {
    
    const user = await Userdev.findByPk(id, {
        attributes: {
            exclude: ['password', 'active']
        }, 
        include: [
            {
                model: Socialpost,
                where: {active: true},
                order: [['createdAt', 'DESC']],
                required: false,
                include: [
                    {
                        model: Userdev,
                        attributes: ['id', 'name', 'image']
                    },
                    {
                        model: Socialcomment,
                        where: {active: true},
                        required: false,
                        include: {
                            model: Userdev,
                            attributes: ['id', 'name', 'image']
                        }
                    }
                ],
            },
        ]
    });

    return user;
}

module.exports = { getUserDetails };