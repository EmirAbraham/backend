const createUser = async (params) => {
    const user = await Userdev.findOrCreate({
        where: {
            email: params.email
        },
        defaults: {
            name: params.name,
            email: params.email,
            nickName: params.nickName,
            image: params.image,
        }
    });
    return user;
}
  
module.exports = { createUser };