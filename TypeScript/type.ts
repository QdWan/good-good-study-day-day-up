// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// function getLength(something: string | number): number {
//   return something.length;
// }

// TypeScript / type.ts(2, 20): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

// 访问 string 和 number 的共有属性是没问题的：
function getString(something: string | number): string {
  return something.toString();
}

// interface

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 22,
}
