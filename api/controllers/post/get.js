module.exports = {


  friendlyName: 'Get',


  description: 'Get post.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    const data = await Post.getDatastore().sendNativeQuery('SELECT * FROM post')
    // All done.
    return data.rows;

  }


};
