const { Userdev } = require("../../db")

const createUser = async (params) => {
    
    const { name, email, nickName, image, birthdate } = params;

    const required = [ 'name', 'email', 'nickName' ];
    for (const el of required) {
        if(!params.hasOwnProperty(el)) throw new Error(`${el} is required`);
    }

    const [ user, created ] = await Userdev.findOrCreate({
        where: {
            email,
        },
        defaults: {
            name,
            email,
            nickName,
            image,
            birthdate,
        }
    });

    if (!created) throw new Error(`User already exists`);

    return user;
}
  
module.exports = { createUser };