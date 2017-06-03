const singleton = `
var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();

it('should have getInstance method', function() {
  expect(Singleton.getInstance).toBeDefined();
});

it('random variable should be equal', function() {
  expect(singleA.getRandomNumber()).toEqual(singleB.getRandomNumber());
});
`;

const decorator = `
var mb = new MacBook();

it("macbook should have cost", function() {
  expect(mb.cost()).toEqual(997)
});

it("macbook should have new cost", function() {
  memory(mb);
  expect(mb.cost()).toEqual(1072);
});

it("macbook should have new cost", function() {
  engraving(mb);
  expect(mb.cost()).toEqual(1272);
});

it("macbook should have new cost", function() {
  insurance(mb);
  expect(mb.cost()).toEqual(1522);
});
`;

const prototype = `
var rabbit = new Rabbit("Rabbit");

it("Animal should have walk method", function() {
  var animal = new Animal;
  expect(animal.walk).toBeDefined();
});

it("should have method walk", function() {
  expect(rabbit.walk).toBeDefined();
});

it("walk method should have been called", function() {
  spyOn(rabbit, "walk");

  rabbit.walk();

  expect(rabbit.walk).toHaveBeenCalled();
});

it("should be instanceof Animal", function() {
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

const observer = `
describe("Subject", function() {
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

  it("have subscribeObserver method", function() {
    expect(subject.subscribeObserver).toBeDefined()
  });

  it("have unsubscribeObserver method", function() {
    expect(subject.unsubscribeObserver).toBeDefined()
  });

  it("have notifyObserver method", function() {
    expect(subject.notifyObserver).toBeDefined()
  });

  it("have notifyAllObservers method", function() {
    expect(subject.notifyAllObservers).toBeDefined()
  });

  it("should have observers", function() {
    expect(subject.hasObserver(observer1)).not.toBe(null);
    expect(subject.hasObserver(observer2)).not.toBe(null);
    expect(subject.hasObserver(observer3)).not.toBe(null);
    expect(subject.hasObserver(observer4)).not.toBe(null);
  });

  it("should notify observer1", function() {
    spyOn(observer1, "notify");

    subject.notifyObserver(observer1);

    expect(observer1.notify).toHaveBeenCalled();
  });

  it("should notify all observers", function() {
    spyOn(observer1, "notify");
    spyOn(observer2, "notify");
    spyOn(observer3, "notify");
    spyOn(observer4, "notify");

    subject.notifyAllObservers();

    expect(observer1.notify).toHaveBeenCalled();
    expect(observer2.notify).toHaveBeenCalled();
    expect(observer3.notify).toHaveBeenCalled();
    expect(observer4.notify).toHaveBeenCalled();
  });

  describe("oberser1", function() {
    it("should have notify method", function() {
      expect(observer1.notify).toBeDefined()
    });
  });
});
`;

export default { singleton, decorator, prototype, proxy, observer };
