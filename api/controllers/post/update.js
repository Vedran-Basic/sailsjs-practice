module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    postID:{
      required: true,
      type: 'number',
      description: 'post id',
    },
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
    }

  },
  /* inputs stavljas ono sto primas iz requesta */


  exits: {

  },


  fn: async function (inputs) {
    /* probaj print this ili object.keys(this) da vidis sto ima u wrapu ove funkcije*/
    // All done.
    const {postID, ...rest} = inputs;
    console.log(postID)

    var updatedPost = await Post.updateOne({ id:postID }).set(rest);

    return updatedPost
  }


};
