const { Userdev } = require('../../db');

const updateStatus = async (id, params) => {
    // const { status } = req.body.status;
    // const { devstatus } = req.params.status;
    console.log(params.status);
    // console.log(devstatus);
    console.log("////////////");


    // if(status !== 'superadmin'){
    //     res.status(400).json("Solo los super admins pueden cambiar el estado de los usuarios")
    // }
    
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