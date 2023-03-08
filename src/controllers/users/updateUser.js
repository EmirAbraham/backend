const { Userdev } = require("../../db");

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (id !== req.user.id) {
            return res.status(401).json({ errors: [{msg: "No está permitido editar los datos de otro usuario"}]});
        }

        const { 
            name, 
            birthdate,
            image, 
            description,
            about,
            skills,
            github, 
        } = req.body;

        const user = await Userdev.update(
            {
                name,
                birthdate,
                image,
                description,
                about,
                skills,
                github,
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