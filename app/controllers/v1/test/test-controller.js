var testService = require('../../../services/v1/test/test-service');

function TestController() {
}

function post(req, res, next) {
	testService.test((result) => {
		res.status(200).json(result);
	});
}

function get(req, res, next) {
	testService.test()
	.then((result) => {
		res.status(200).json(result);
	});
}

TestController.prototype = {
	get: get,
	post: post
};

var test = new TestController();
module.exports = test;
