
// 对象通过引用来传递，永远不会被复制
const stooge = {}

var  x = stooge;
x.nickname = 'curly'
var nick = stooge.nickname

console.log(nick);
// curly


if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    var F = function () {}
    F.prototype = obj
    return new F()
  }
}
const cpstooge = Object.create(stooge)
console.log(cpstooge.nickname)
console.log(cpstooge.family);
stooge.family = 'moses'
console.log(cpstooge.family);
// curl
// undefined
// moses

// 打印j结果说明cpstooge 继承了 stooge的属性
