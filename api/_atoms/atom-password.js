'use strict'

const AtomName = 'Password'

module.exports = {
	type: String
  , validate: require('./../_hadrons/'+AtomName.toLowerCase()+'MongooseValidade')
  // , required: true
}
