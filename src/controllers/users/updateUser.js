const { Userdev } = require("../../db");

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            name, 
            birthdate,
            image, 
            description,
            about,
            skills, 
        } = req.body;

        const user = await Userdev.update(
            {
                name,
                birthdate,
                image,
                description,
                about,
                skills,
            },
            {
                where: {
                    id,
                },
            }
        );

        return res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
};

module.exports = { updateUser };