module.exports = {


  friendlyName: 'Get',


  description: 'Get post.',


  inputs: {
  },


  exits: {

  },


  fn: async function () {
    console.log()
    const postID = this.req.params.id
    return Post.findOne({id: postID}).populate('tags');
  }


};
