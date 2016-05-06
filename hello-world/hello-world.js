var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  if(!input) {
    return "Hello, World!";
  }
  else {
    return "Hello, " + input + "World!";
  }
};

module.exports = HelloWorld;
