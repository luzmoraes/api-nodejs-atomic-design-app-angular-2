'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const generateHash = require('../../_quarks/quark-generateHash.js')
const isValidPassword = require('../../_quarks/quark-isValidPassword.js')

const local = require('./molecules/molecule-local')
const facebook = require('./molecules/molecule-facebook')
const github = require('./molecules/molecule-github')
const google = require('./molecules/molecule-google')
const twitter = require('./molecules/molecule-twitter')

const Molecule = {
  local,
  facebook,
  twitter,
  google,
  github
}
const Molecule = mongoose.Schema(Molecule);

Molecule.methods.generateHash = generateHash

Molecule.methods.validPassword = function(password) {
    return isValidPassword(password, this.local)
};

module.exports = Molecule;
