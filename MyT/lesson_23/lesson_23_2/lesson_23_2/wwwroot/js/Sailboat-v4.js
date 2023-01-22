// Sailboat-v4.js
export default class Sailboat {
  // Public member variables
  #_name;
  #_length;

  // Properties (setters and getters)
  get name() {
    return this.#_name;
  }
  set name(n) {
    this.#_name = n;
  }

  get length() {
    return this.#_length;
  }
  set length(n) {
    this.#_length = n;
  }

  // Member functions
  // Calculate the hull speed for the boat.
  hullspeed = function () {
    return 1.34 * Math.sqrt(this.length);
  };
}
