const Atom = {
	type: String
  , set: require('./../_quarks/toLower')
  , validate: require('./../_hadrons/emailMongooseValidade')
  , required: true
}

module.exports = Atom;