const person = {
  fullName: function (state) {
    return `${this.name} lives in ${this.city} ${state}`;
  },
};

const emp = {
  name: "Pawan",
  city: "Lucknow",
};

Function.prototype.customCall = function (obj = {}, ...args) {
  if (typeof obj !== "object" || obj === null) return this(...args);
  obj.fn = this;
  return obj.fn(...args);
};

console.log(person.fullName.customCall(null, "Uttar Pradesh"));
