// 发布订阅模式

// 你想买房的时候，一般要去售楼部看一看，结果房子都卖完了，你留了一个电话希望有人卖的话，可以联系你


// 定义售楼处
var salesOffices = {};

// 缓存列表，存放订阅者的回调函数
salesOffices.clientList = [];

// 订阅的消息添加进缓存表
salesOffices.listen = function (fn) {
  this.clientList.push(fn);
};

// 编写发布函数
salesOffices.trigger = function () {
  for (let index = 0; index < this.clientList.length; index++) {
    const fn = this.clientList[index];

    // 通过apply将参数传给执行函数
    fn.apply(this, arguments);
  }
}

// 创建一个订阅者
salesOffices.listen(function (square, price, phonenum ){
  console.log('面积', square);
  console.log('价格' + price);
  console.log('卖房人电话' + phonenum);
});

// 通知所有想买房的人
salesOffices.trigger('110', '80万', '130xxxxxxx')
