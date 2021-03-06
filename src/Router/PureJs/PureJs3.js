import React, { PureComponent } from "react";
import CodePen from "../../components/CodePen";

export class PureJs3 extends PureComponent {
  /* 
        // Function statement OR Function Declaration
function a() {
    console.log('Hehhehhe...!!');
}
// Function Expression
const b = function () {
    console.log('B: HAHAHHAHA...!!');
}

// Anonymous Function
function () {
    
}

// Named Function Expression
const b = function xyz() {
    console.log('B: HAHAHHAHA...!!');
}

// Named Function Expression
const b = function xyz() {
    console.log('B: HAHAHHAHA...!!');
}
b();
xyz();
B: HAHAHHAHA...!!
Uncaught ReferenceError: xyz is not defined at <anonymous>
xyz not created with globel scope

=====================
const b1 = function xyz() {
    console.log(xyz);
}
b1();
xyz();
VM3909:3 ƒ xyz() {
    console.log(xyz);
}

// Difference between Parameters & Arguments
var b = function(para1) {
    console.log('B!! '+para1);
}
b('arg1')


// First Class Function OR First Class Citizens
var b2 = function(para1) {
    return para1;
}
b2(function() {});

ability function as argument and return from another function called as first class function!!

// What is callback function in JavaScript
setTimeout(function() {     // callback start
    console.log('timer'); // 
}, 5000);                   // callback end
function x(y) {
    console.log('x');
    y();
}
x(function y() {
    console.log('y');
})
x
y
timer
    */
  /* 
   var fruits = ['apple', 'banana', 'mango', 'lichi'];
var fruitsObj = fruits.reduce((obj, fruit) => {
    if(obj[fruit]) {
        obj[fruit]++;
    } else {
        obj[fruit] = 1
    }
    return obj;
}, {});
console.log(fruitsObj);
var arr = [
    {name: 'Krishna', age:35},
    {name: 'Kumar', age:33},
    {name: 'Krishna1', age:35},
    {name: 'Kumar1', age:33}
];
arr.filter(elem => elem.age === 35);
var arr = [1,2,3];
arr.map(elem => elem * 2);
   */
  /* 
  var b = 10;
function outer() {
    console.log(b);//un
    var b = 20;
    function inner() {
        b++;
        console.log(b);//un
        if(true) {
            var b = 3;
            console.log(b);//3
        }
    }
    inner();
}
outer();

=================
var array = [];
array.__proto__.myMethord = () => {}
array.myMethord();
=================

  */
  render() {
    return (
      <>
        <section>
          <h1>Object literal</h1>
          <CodePen>
            {"// "}Object literal for creating objects
            <br />
            let car = &#123;
            <br />
            &nbsp;&nbsp;name: 'Maruti',
            <br />
            &nbsp;&nbsp;speed: 180,
            <br />
            &nbsp;&nbsp;run: function() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(`${this.name} car running in
            speed ${this.speed}`);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;;
            <br />
            {/* 
                // Object literal for creating objects
            var proto = {
    slogan: function() {
        return "This company is the best";
    },
    changeName: function(giveName) {
        this.name = giveName;
    }
}

var kr = Object.create(proto);
console.log(kr);
kr.name = "Krishna";
kr.role = "SE";

var krS = Object.create(proto, {
    name: {value: "Krishna Singh"}, // need to add 'writable: true'
    role: {value: "SSE"},
});

kr.changeName('lloo');
krS.changeName('ll');
console.log(kr);
console.log(krS);
            */}
            {/* function Emp(name, salary, exp) {
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}
Emp.prototype.slogan = function () {
    return `This company is the best ${this.name}`
}
let krObj = new Emp('Krish', 300000, 12);
console.log(krObj.slogan()); */}
            {/* function Emp(name, salary, exp) {
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}
Emp.prototype.slogan = function () {
    return `This company is the best ${this.name}`
}
function Progm(name, salary, exp, lang) {
    Emp.call(this, name, salary, exp);
    this.lang = lang;
}
Progm.prototype = Object.create(Emp.prototype);
Progm.prototype.constructor = Progm;
let krSObj = new Progm('Krish Singh', 500000, 18, 'JS');
console.log(krSObj); */}
            {/* class Emp {
    constructor(givenName, givenSalary, givenExp) {
        this.name = givenName;
        this.salary = givenSalary;
        this.exp = givenExp;
    }
    slogan() {
        return `This company is the best ${this.name}`
    }
}
let krObj = new Emp('Krish Singh', 500000, 18);
console.log(krObj.slogan()); */}
            {/* class Emp {
    constructor(givenName, givenSalary, givenExp) {
        this.name = givenName;
        this.salary = givenSalary;
        this.exp = givenExp;
    }
    slogan() {
        return `This company is the best ${this.name}`;
    }
    static add(a, b) {
        return a + b;
    }
}
// let krObj = new Emp('Krish Singh', 500000, 18);
console.log(Emp); */}
            {/* class Emp {
    constructor(givenName, givenSalary, givenExp) {
        this.name = givenName;
        this.salary = givenSalary;
        this.exp = givenExp;
    }
    slogan() {
        return `This company is the best ${this.name}`;
    }
}
class Progm extends Emp {
    constructor(givenName, givenSalary, givenExp, givenLang) {
        super(givenName, givenSalary, givenExp);
        this.lang = givenLang;
    }
}
let krSObj = new Progm('Krish Singh', 500000, 18, 'JK');
console.log(krSObj); */}
            {/*  */}
            function GeneralCar(givenName, givenSpeed) &#123;
            <br />
            &nbsp;&nbsp;this.name = givenName;
            <br />
            &nbsp;&nbsp;this.topSpeed = givenSpeed;
            <br />
            &nbsp;&nbsp;this.run = function() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(this.name+' is running');
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            let car1 = new GeneralCar('Nissan', 180);
            <br />
            let car2 = new GeneralCar('Maruti', 80);
            <br />
            console.log(car1);
            <br />
            console.log(car2);
            <br />
            console.log(car1.run());
            <br />
            console.log(car2.run());
            <CodePen output={true}>
              Output: <br />
              &nbsp;&nbsp;&nbsp;GeneralCar &#123;name: "Nissan", topSpeed: 180,
              run: ƒ&#125;
              <br />
              &nbsp;&nbsp;&nbsp;GeneralCar &#123;name: "Maruti", topSpeed: 80,
              run: ƒ&#125;
            </CodePen>
          </CodePen>
        </section>
      </>
    );
  }
}

export default PureJs3;
