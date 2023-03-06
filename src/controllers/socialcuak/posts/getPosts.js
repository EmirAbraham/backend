const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const getPosts = async (req, res) => {

    try {
        const { page } = req.query;

        let where = { active: true };
        let limit = 10;
        let offset = ((page ? page : 1) - 1) * limit;
        let url = 'https://backend-production-c946.up.railway.app/socialcuak?';
        const currentPage = Number(page) || (offset / limit) + 1;

        const results = await Socialpost.findAll({
            offset,
            limit,
            where,
            order: [['createdAt', 'DESC']],
            attributes: {
                exclude: ['userdevId']
            },
            include: [
                {
                    model: Userdev,
                    attributes: ['name', 'image', "id"],
                },
            ],
        })
        const count = await Socialpost.count({ where });
        const pages = Math.ceil(await count / limit);
        const next = currentPage >= pages ? null : `${url}page=${currentPage + 1}`;
        const previus = currentPage <= 1 ? null : `${url}page=${currentPage - 1}`;

        res.status(200).json({count, pages, previus, next, results});

    } catch (error) {
        res.status(500).json({ errors: [{ msg: error.message }] });
    }
}

module.exports = { getPosts }