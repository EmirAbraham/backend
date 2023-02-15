const { Socialpost } = require('../../../db');

const updatePost = async (id, content) => {
    await Socialpost.update(
        {
        content: content,
        },
        {
          where: {
            id: id,
          },
        }
      );
}

module.exports = {updatePost}