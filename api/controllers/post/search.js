module.exports = {


  friendlyName: 'Search',


  description: 'Search post.',


  inputs: {
    // GET metode nemaju body, ali imaju query params i params.id
    // U inputima ne uredujes request body, nego request params da ih postavis na number ili sto god treba
    // ako trebas array u requestu, bolje koristiti post metodu
    search:{
      type:"string"
    },
    sort:{
      type:"string"
    },
    limit: {
      type:'number'
    },
    tag:{
      type:"string"
    },
    searchFor:{
      type:"string"
    }

  },


  exits: {
    success:{
      responseType:'ok'
    }
  },


  fn: async function (inputs, exits) {

    // const searchedTag = inputs.tag[0] === '#' ? inputs.tag : '#' + inputs.tag
    let where = {};
    if(inputs.search) where.search = inputs.search
    if(inputs.limit) where.limit = inputs.limit
    if(inputs.sort) where.sort = inputs.sort

    let _tags = []
    const delimiter = '_'
    if(inputs.tag) {
       _tags = inputs.tag.split(delimiter)
      _tags = _tags.map( tag => {
        return '#' + tag
      })
      console.log(_tags);
    }
    if(inputs.searchFor ==='any'){
      return exits.success(await Tag.find({name:_tags}).populate('post'))//
    }

    if(inputs.searchFor ==='exact'){
      return exits.success('exact')
    }





    return exits.success(await Tag.find(where).populate('post'))

    const posts = await Post.find().populate('tags')
    let matchingPosts = []
    posts.forEach( post => {
      post.tags.forEach( tag => {
        if(tag.name.includes(inputs.tag)){
          matchingPosts.push(post)
        }
      })
    })
    return exits.success(matchingPosts)

  }


};
