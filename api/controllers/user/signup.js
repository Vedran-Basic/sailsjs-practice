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
      columnType: 'FLOAT',
      description: 'users email.'
    },
    password: {
      type: 'string',
      password: true,
      defaultsTo: 'cm'
    },
  },
  exits: {

  },


  fn: async function (inputs) {
    const { email, password, username} = inputs
    const user = User.find({email:email}).fetch
    if(user){
      console.log(user)
      return "User already registered!"
    }
    const newUser = await User.create((Object.assign(
      {
        username,
        email,
        password})))
      .fetch()
    // All done.
    return newUser
  }
};
