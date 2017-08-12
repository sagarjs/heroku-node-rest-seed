function TestService() {
}

TestService.prototype = {
  test: test
};

var test = new TestService();
module.exports = test;


function test() {
  console.log('test');
  return new Promise((res, rej) => {
    res({result: 'Test'});
  });
}
