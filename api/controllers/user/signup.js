module.exports = {


  friendlyName: 'Signup',


  description: 'Signup user.',


  inputs: {
    username: {
      type: 'string',
      required: true,
      description: 'title.',
      extendedDescription: 'this is title.',
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true,
      description: 'users email.'
    },
    password: {
      type: 'string',
      required: true
    },
  },
  exits: {
    success: {
      responseType: 'ok'
    },
    emailAlreadyInUse: {
      responseType: 'badRequest',
      description: 'Email is used!'
    },
    nekierror:{
      responseType: 'badRequest',
      description: 'Email is used!'
    },
    adapterError:{
      responseType: 'badRequest',
      description: 'Adapter error!'
    }
  },


  fn: async function (inputs, exits) {


    const {email, password, username} = inputs;
    const user = await User.find({email: email});
    // if(user){
    //   console.log(user)
    //   return  exits.success("User already registered!")
    // }
    let newUser;
    try {
      newUser = await User.create(
        {
          username,
          email,
          password
        })
        .fetch();
    } catch (e) {
      if (e.name === 'AdapterError'){
        console.log('adapter error!! ')
        return exits.adapterError()
      }

    if(e.code === 'E_UNIQUE') {
    return exits.emailAlreadyInUse('dadadasd');
      }

  }
    // All done.
    return exits.success(newUser);
  }
};
