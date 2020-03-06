module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


    inputs: {

      title: {
        required: true,
        type: 'string',
        description: 'title.',
        extendedDescription: 'this is title.',
      },

      body: {
        required: true,
        type: 'string',
        maxLength: 255,
        description: 'posts comntent.'
      },

      userID:  {
        required: true,
        type: 'number',
        description: 'The users full name.',
      },
      tags:{
        type:'ref',
        description: 'tags',
      }
    },
    /* inputs stavljas ono sto primas iz requesta */


  exits: {

  },


  fn: async function (inputs) {
    /* probaj print this ili object.keys(this) da vidis sto ima u wrapu ove funkcije*/
    // All done.
    const {title, body, userID} = inputs;
    const newPost = await Post.create((Object.assign({
      title,
      body,
      userID
    }))).fetch()
    return newPost;

  }


};
