// function Shape(color) {
//     this.color = color;
// }
// Shape.prototype.duplicate = function() {
//     console.log("This is duplicate prototype");
// }

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//     console.log("This is draw prototype function");
// }

// const circle = new Circle(10, 'red');
// const shape = new Shape("Red");
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Head(eyes, ears) {
    this.eyes = eyes;
    this.ears = ears;
}

Head.prototype.brain = function() {
    console.log("This is brain");
}

extend(Body, Head);

function Body(eyes, ears, chest, hands) {
    Head.call(this, eyes, ears);
    this.chest = chest;
    this.hands = hands; 
}

function Legs(val, eyes, ears) {
    Head.call(this, eyes, ears);
    this.val = val;
}
extend(Legs, Head);

const head = new Head(2, 2);
const body = new Body(2, 2, 1, 2);
const leg = new Legs(2, 2, 2);

const arr = [1, 2, 3, 4];
// let sumOfUsingArrow = arr.reduce((accu, value) => accu + value, 0);
// console.log(sumOfUsingArrow(arr));
// const sum = (acc, val) => acc + val;
// var sumOfUsingArrow = arr.reduce(sum, 0);
// console.log(sumOfUsingArrow);

const empty = [1, 2, 3, 4,,,,,,,, 5, 7, 8,,,,];
const value = empty.filter((val) => {
    return val >= 0;
});
console.log(value);


(function name() {
    console.log("Pkprabu");
})();