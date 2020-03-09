module.exports = {


  friendlyName: 'Get',


  description: 'Get post.',


  inputs: {},


  exits: {},


  fn: async function () {


    return await Post.find().populate('tags')
  }
};
