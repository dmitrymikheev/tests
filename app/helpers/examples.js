const singleton = `
var Singleton = (function () {
  var instance;

  function init() {
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function() {

      }
    };
  };

  return {
    getInstance: function () {

    }
  };
})();
`;

const decorator = `
function MacBook() {

}

// Decorator 1
function memory( macbook ) {

}

// Decorator 2
function engraving( macbook ){

}

// Decorator 3
function insurance( macbook ){

}
`;

const prototype = `
function Animal(name) {

}

function Rabbit(name) {

}

Rabbit.prototype = ;
`;

const proxy = `
var listener = {

};

var p = new Proxy({}, listener);
`;

const observer = `
var Subject = function() {

  return {
    subscribeObserver: function(observer) {

    },
    unsubscribeObserver: function(observer) {

    },
    notifyObserver: function(observer) {

    },
    notifyAllObservers: function() {

    },
    hasObserver: function(observer) {

    }
  };
};

var Observer = function() {

}
`;

export default { singleton, decorator, prototype, proxy, observer };
