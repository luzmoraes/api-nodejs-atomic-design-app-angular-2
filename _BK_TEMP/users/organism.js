'use strict';

const DNA = {
	name: 'Users'
  , organelles: []
};

const Cell = require('./../../_factories/organism')(DNA);
module.exports = Cell;
