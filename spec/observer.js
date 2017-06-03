var subject = new Subject();
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

beforeEach(function() {
  subject.subscribeObserver(observer1);
  subject.subscribeObserver(observer2);
  subject.subscribeObserver(observer3);
  subject.subscribeObserver(observer4);
});

it('have subscribeObserver method', function() {
  expect(subject.subscribeObserver).toBeDefined();
});

it('have unsubscribeObserver method', function() {
  expect(subject.unsubscribeObserver).toBeDefined();
});

it('have notifyObserver method', function() {
  expect(subject.notifyObserver).toBeDefined();
});

it('have notifyAllObservers method', function() {
  expect(subject.notifyAllObservers).toBeDefined();
});

it('should have observers', function() {
  expect(subject.hasObserver(observer1)).not.toBe(null);
  expect(subject.hasObserver(observer2)).not.toBe(null);
  expect(subject.hasObserver(observer3)).not.toBe(null);
  expect(subject.hasObserver(observer4)).not.toBe(null);
});

it('should notify observer1', function() {
  spyOn(observer1, 'notify');

  subject.notifyObserver(observer1);

  expect(observer1.notify).toHaveBeenCalled();
});

it('should notify all observers', function() {
  spyOn(observer1, 'notify');
  spyOn(observer2, 'notify');
  spyOn(observer3, 'notify');
  spyOn(observer4, 'notify');

  subject.notifyAllObservers();

  expect(observer1.notify).toHaveBeenCalled();
  expect(observer2.notify).toHaveBeenCalled();
  expect(observer3.notify).toHaveBeenCalled();
  expect(observer4.notify).toHaveBeenCalled();
});

describe('oberser1', function() {
  it('should have notify method', function() {
    expect(observer1.notify).toBeDefined();
  });
});
