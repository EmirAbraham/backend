const { Userdev } = require('../../db');

const updateStatus = async (id, params, userid) => {
    const superadmin = await Userdev.findByPk(userid)
    if( superadmin.dataValues.status !== 'superadmin'){
        return "Solo los super admins pueden cambiar el estado de los usuarios"
    }
    
    await Userdev.update({
        status: params.status
    },
    {
        where: {
            id: id
        }
    })
};

module.exports = {updateStatus};