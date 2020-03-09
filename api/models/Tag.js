/**
 * Tag.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:'string'
    },
    post:{
      model:'post'
    }

  },
  customToJSON: function() {
    return _.omit(this, ['createdAt', 'updatedAt'])
  },
  beforeCreate: function (valuesToSet, proceed) {
    if(!valuesToSet.name.charAt(0).includes('#')){
      valuesToSet.name = '#' + valuesToSet.name
    }
    return proceed();
  }

};

