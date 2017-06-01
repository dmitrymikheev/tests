var rabbit = new Rabbit('Rabbit');
rabbit.walk();

it('should have method walk', function() {
  expect(rabbit.walk).toBeDefined();
});

it('should be instanceof Animal', function() {
  expect(rabbit instanceof Animal).toBe(true);
});
