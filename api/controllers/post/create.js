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
    const {title, body, userID, tags} = inputs;
    const {id} = await Post.create({
      title,
      body,
      userID
    }).fetch()
    const tagovi = await Tag.createEach(tags.map(tag => ({...{name: tag, post: id}})));
    return exits.success();

  }


};
