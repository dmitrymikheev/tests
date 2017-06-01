
      describe('prototype', function() {
        function Animal(name) {
  this.name = name;

  this.walk = function() {
    return "walk " + this.name;
  };

}

function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
        var rabbit = new Rabbit('Rabbit');
rabbit.walk();

it('should have method walk', function() {
  expect(rabbit.walk).toBeDefined();
});

it('should be instanceof Animal', function() {
  expect(rabbit instanceof Animal).toBe(true);
});

      });
    