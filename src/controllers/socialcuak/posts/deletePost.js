const { Socialpost } = require('../../../db');

const deletePost = async (id) => {
    await Socialpost.update(
        {
          active: false,
        },
        {
          where: { id: id },
        }
      );
}

module.exports = {deletePost}

