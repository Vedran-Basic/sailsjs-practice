module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postID:{
      required: true,
      type: 'number',
      description: 'post id',
    },
    userID:{
      required: true,
      type: 'number',
      description: 'user id',
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const {postID, userID } = inputs
    const query = await Post.find({userID, id:postID})
    if(!query.length){
      return {msg:"Nothing"}
    }
    else{
      const deletion = await Post.destroy({id:postID}).fetch()
      return deletion

    }

  }


};
