"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
let someValue = "this is a string";
let strLength = someValue.length;
console.log(strLength);
function printObj(labelledObj) {
    console.log(labelledObj.label);
}
printObj({ label: '123' });
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ colorr: "black", width: 120 });
let a = [1, 2, 3, 4];
console.log(a);
let ro = a;
a = ro;
class Greeter {
    constructor(params) {
        this.name = params;
    }
}
const getName = new Greeter('张飞');
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
class Animal2 {
    constructor(theName) { this.name = theName; }
}
let an2name = new Animal2("Cat");
an2name.name = '123'; // 错误: 'name' 是私有的.
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        // 这里的name可以使用
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
class Octopus {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
class Oct extends Octopus {
    constructor(name, bab) {
        super(name);
        this.octname = this.name;
        this.bab = bab;
    }
}
let bab = new Oct('wang', 'li');
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
let passcode = "secret passcode";
class Employee2 {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode === 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('error: Unauthorized update of employee!');
        }
    }
}
let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting() {
        console.log('The Accounting   Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
//# sourceMappingURL=type.js.map