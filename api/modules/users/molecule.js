'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
		name: require('./../../_atoms/atom-name')
  , email: require('./../../_atoms/atom-email')
	, username: require('./../../_atoms/atom-name')
  , password: require('./../../_atoms/atom-password')
  , created_at: { type: Date, default: Date.now }
}

module.exports = new Schema(Molecule);
