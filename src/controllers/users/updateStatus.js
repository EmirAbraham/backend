const { Userdev } = require('../../db');

const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const newStatus = req.body.status;
        const { status } = req.user;

        if (status !== 'superadmin') {
            return res.status(403).json({errors: [{ msg: "Solo los super admins pueden cambiar el estado de los usuarios"}]});
        }

        const newAdmin = await Userdev.update({
                status: newStatus
            },
            {
                where: {
                    id,
                }
            }
        );

        if (newAdmin[0] > 0) {
            return res.status(200).json("Status actualizado correctamente");
        } else {
            return res.status(500).json("El status no se pudo actualizar");
        }

    } catch (error) {
        res.status(500).send({errors: [{msg: error.message}]});
    }
};

module.exports = { updateStatus };