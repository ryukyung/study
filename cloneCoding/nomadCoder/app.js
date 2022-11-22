const a = 5;
const b = 2;
let myName = "gaori";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hi " + myName);
myName = "AkO";
console.log("My new name is " + myName);

const testNull = null;
let something;
console.log(something, testNull);

// array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const variableWeek = [mon, tue, wed, thu, fri, sat, sun];
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[4]);

// object
const playerName = "gaori";
const playerPoints = 3000;
const playerLogin = false;

const player = {
  name: "gaori",
  points: 3000,
  login: false,
};
console.log(player);
console.log(playerName, player.name);
player.name = "Ako";
console.log(playerName, player.name);
