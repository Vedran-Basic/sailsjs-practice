module.exports = {


  friendlyName: 'Get',


  description: 'Get post.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    const postID = this.req.params.id
    const data = await Post.getDatastore().sendNativeQuery(`SELECT * FROM post WHERE id = ${postID}`)
    return data.rows;

  }


};
