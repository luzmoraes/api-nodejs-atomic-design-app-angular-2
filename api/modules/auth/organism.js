'use strict';
const mongoose  = require('mongoose');
const Molecule = require('../molecule');
const OrganismName = 'Auth'

module.exports = mongoose.model(OrganismName, Molecule)
