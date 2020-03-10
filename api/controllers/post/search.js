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


    //Function create Tag array : / {"name":{"contains":"_ṭag[0]"}},{"name":{"contains":"_tag[1]"}...}
    const createTagArray = (array) =>{
      let objectArray = []
      array.forEach ( element => {
        objectArray.push({name:{contains:element}})
      })
      return objectArray
    }

    //Tags split
    let _tags = []
    const delimiter = '_'
    if(inputs.tag) {
       _tags = inputs.tag.split(delimiter)
    }

    if(_tags.length === 1){
      where.name = {contains: _tags[0]}
    } else {
      _tags = createTagArray(_tags)
      where.or = _tags
    }


    if(inputs.searchFor ==='any'){
      return exits.success(await Tag.find(where).populate('post'))
    }






    return exits.success(await Tag.find(where).populate('post'))

    //na postovima search
    // const posts = await Post.find().populate('tags')
    // let matchingPosts = []
    // posts.forEach( post => {
    //   post.tags.forEach( tag => {
    //     if(tag.name.includes(inputs.tag)){
    //       matchingPosts.push(post)
    //     }
    //   })
    // })
    // return exits.success(matchingPosts)

  }


};
