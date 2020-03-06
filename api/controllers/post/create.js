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
    success:{
      responseType:'ok'
    }
  },


  fn: async function (inputs, exits) {
    /* probaj print this ili object.keys(this) da vidis sto ima u wrapu ove funkcije*/
    // All done.
    const {title, body, userID, tags} = inputs;
    // const newPost = await Post.create({
    //   title,
    //   body,
    //   userID,
    //   tags
    // }).fetch()

    const tagsMap = tags.forEach(tag =>{
      const tagMapping = Tag.create({
        tag, postID:Post.id//koji nastane nakon creatanja posta
      })
    })
    return exits.success();

  }


};
