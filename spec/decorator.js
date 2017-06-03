var mb = new MacBook();

it('macbook should have cost', function() {
  expect(mb.cost()).toEqual(997);
});

it('macbook should have new cost', function() {
  memory(mb);
  expect(mb.cost()).toEqual(1072);
});

it('macbook should have new cost', function() {
  engraving(mb);
  expect(mb.cost()).toEqual(1272);
});

it('macbook should have new cost', function() {
  insurance(mb);
  expect(mb.cost()).toEqual(1522);
});
