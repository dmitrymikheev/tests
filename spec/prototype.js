var rabbit = new Rabbit('Rabbit');

it('Animal should have walk method', function() {
  var animal = new Animal();
  expect(animal.walk).toBeDefined();
});

it('should have method walk', function() {
  expect(rabbit.walk).toBeDefined();
});

it('walk method should have been called', function() {
  spyOn(rabbit, 'walk');

  rabbit.walk();

  expect(rabbit.walk).toHaveBeenCalled();
});

it('should be instanceof Animal', function() {
  expect(rabbit instanceof Animal).toBe(true);
});
