// my bind can take a context as an argument, captures the scope from outer function and brings it to inner function
// can be optional, 

// context is where your using bind on, what bind is called on.
// this refers to the scope

Function.prototype.myBind = function(context) {
    // debugger
    // this -> turnOn
    // ctx -> lamp
    return () => this.call(context); // lamp.turnOn
};

// Function.prototype.myBind = function(context) {

//     const that = this;
//     return function () { that.call(context)}; // lamp.turnOn()
// };

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  // kin.give_strike() // this -> kin
  // give_strike() // this -> window

  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"