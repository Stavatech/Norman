const master = require('./master');
const worker = require('./worker');
const web = require('./web');
const environ = require('./environ');

module.exports = {
    master,
    worker,
    web,
    environ
};
