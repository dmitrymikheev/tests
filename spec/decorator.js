var mb = new MacBook();

memory(mb);
engraving(mb);
insurance(mb);

it('macbook should have cost', function() {
  expect(mb.cost()).toEqual(1522);
});
