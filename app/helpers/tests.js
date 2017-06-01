const singleton = `
var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();

it('random variable should be equal', function() {
  expect(singleA.getRandomNumber()).toEqual(singleB.getRandomNumber());
});
`;

const decorator = `
var mb = new MacBook();

memory(mb);
engraving(mb);
insurance(mb);

it('macbook should have cost', function() {
  expect(mb.cost()).toEqual(1522);
});
`;

const prototype = `
var rabbit = new Rabbit('Rabbit');
rabbit.walk();

it('should have method walk', function() {
  expect(rabbit.walk).toBeDefined();
});

it('should be instanceof Animal', function() {
  expect(rabbit instanceof Animal).toBe(true);
});
`;

const proxy = `
var p = new Proxy({}, listener);
p.a = 23;
p.b = 'I am a String';

it('should have valid values', function() {
  expect(p.a).toEqual(23);
  expect(p.b).toEqual('I am a String');
});

it('should have default value', function() {
  expect(p.someOtherProperty).toEqual(99);
});
`;

export default { singleton, decorator, prototype, proxy };
