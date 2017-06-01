var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();

it('random variable should be equal', function() {
  expect(singleA.getRandomNumber()).toEqual(singleB.getRandomNumber());
});
