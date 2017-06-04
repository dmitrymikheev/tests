
      describe('singleton', function() {
        
var Singleton = (function () {
  var instance;

  function init() {
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function() {

      }
    };
  };

  return {
    getInstance: function () {

    }
  };
})();

        var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();

it('should have getInstance method', function() {
  expect(Singleton.getInstance).toBeDefined();
});

it('random variable should be equal', function() {
  expect(singleA.getRandomNumber()).toEqual(singleB.getRandomNumber());
});

      });
    