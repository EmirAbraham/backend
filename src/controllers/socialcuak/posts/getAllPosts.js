const {Socialpost, Userdev, Socialcomment} = require('../../../db');

const getAllPosts = async () => {
    const allPosts = await Socialpost.findAll({
        include:[
            {
                model: Userdev,
                attributes: ['name' , 'image']
            },
            {
                model: Socialcomment,
                attributes: ['content', 'likes']
            }
        ]
    })
    return allPosts
}
// const coment = allPosts.forEach(async element => {
//     await Socialcomment.findAll({where:{socialpostId:element.id},
//     include: {
//         model: Socialcomment,
//         attributes: ['content', 'likes']
//     }})
// });
// return coment
// }
module.exports = {getAllPosts}