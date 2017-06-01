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
