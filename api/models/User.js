/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true
    },

    // e.g. 3.26
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true,
      columnType: 'FLOAT'
    },

    // e.g. "cm"
    password: {
      type: 'string',
      defaultsTo: 'cm'
    },

  }

}
