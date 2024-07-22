JavaScript是单线程的，这意味着它一次只能执行一个任务。为了处理异步操作，JavaScript依赖于**事件循环(Event Loop)机制**。事件循环允许JavaScript在等待异步操作完成时继续执行其他任务，从而实现非阻塞的异步编程。
## 1.事件循环机制(Event Loop)
**事件循环机制**依靠**调用栈**和**任务队列**完成事件循环，从而实现JS的异步编程。  
**调用栈（Call Stack）：**
都知道栈是一种后进先出的数据结构，它用于跟踪正在执行的函数。当一个函数被调用则进栈，函数执行完成后则出栈。  
**任务队列（Task Queue）：**  
任务队列是一种先进先出的数据结构，它用于存放等待执行的异步函数。  
**事件循环（Event Loop）：**  
事件循环不断地检查调用栈是否为空，如果调用栈为空，并且任务队列中有待处理的任务，事件循环会将任务队列中的第一个任务移到调用栈中执行。  
### 1.同步任务与异步任务
在js中任务被分为同步与异步任务，同步任务将在执行流程中直接进入调用栈进行执行，而异步任务会先进入任务队列等待执行。  
**同步任务**： 在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务，例如<span class="markdown-text-background-color">console.lo()</span>。  
**异步任务**：不进入主线程、而进入”任务队列”的任务。  
### 2.微任务与宏任务
在JavaScript中，**微任务(microtasks)**和**宏任务(macrotasks)** 是事件循环中处理异步任务的两种类型。它们代表了不同优先级的任务队列，事件循环会按照特定的顺序执行这些任务。
宏任务主要由（浏览器、Node）发起，微任务由js引擎发起。  
**微任务**：<span class="markdown-text-background-color">nextTick()</span>，<span class="markdown-text-background-color">Promise.then()</span>、<span class="markdown-text-background-color">Promise.catch()</span>,<span class="markdown-text-background-color">async/await</span> 
**宏任务**：<span class="markdown-text-background-color">setTimeout</span>,<span class="markdown-text-background-color">setInterval</span>，I/O，script代码快  
### 3.执行过程
在了解事件循环机制后，事件循环执行流程为**同步任务进栈执行，微任务进栈执行，宏任务进栈执行**。下面用代码说明：  
```js
console.log(1);  //同步任务
  setTimeout(function consoleLog2(){
    console.log(2);   //回调  宏任务
  },0)
  const p = new Promise((resolve)=>{   //promise为同步任务
  console.log(3);
  resolve(100);
  console.log(4);
})
p.then(data=>{   
  console.log(data); //微任务
})
console.log(5)  //同步任务
```
**以上代码在事件循环中的流程为**：  
console.log(1)进栈执行➡️console.log(2)进入任务队列➡️console.log(3)进栈执行➡️resolve，console.log(data)进入微任务队列➡️console.log(4)进栈执行➡️console.log(5)进栈执行➡️微任务console.log(data)出队并进栈执行➡️宏任务console.log(2)出队进栈执行  
**运行结果为：**  
1  
3   
4  
5  
100  
2  
## 2.异步操作
了解完上面的内容后，可以开始了解js中三种异步操作了： **异步回调**、**Promise**、**async/await**
### 1.异步回调
先看以下代码：
```js
A(_function) {
    _function()
    console.log("A")
}
B(){
    for (let i = 0;;i++){
        console.log(i)
    if (i===9999){
        console.log("B")
        break
        }
    }
}
//执行
A(B)
//结果B A
```
使用函数B()模拟耗时函数，通过运行结果可以看到，当打印到9999时才会一次输出B A，显然A函数想要执行必须等待B函数执行完毕，函数的执行依然是自上而下顺序执行，因为函数A与B都为同步函数，此为同步调用。
要想B的执行不阻塞A，只需要在A里进行异步处理，代码如下：
```js
A(_function) {
    setTimeout(_function,0)
    console.log("A")
}
//执行
A(B)
//结果A B
```
其实即使我们将setTimeout的延时改为1000，结果也会是A B，因为setTimeout()函数支持异步处理，它在循环机制中属于宏任务，它的执行不会影响主线程中的同步任务，因此函数A不会因为B的执行而发生阻塞。但如果回调层数太多，代码耦合度高，难以维护，且会造成回调地狱。
### 2.Promise
Promise是异步编程的另一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了传统的解决方案回调函数的回调地狱。  
> 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。  

Promise有三种状态:Pending（进行））,Resolved（完成）,Rejected（拒绝）。状态的转变依靠resolve()和reject()函数来实现。  
Promise构造函数接收一个函数作为参数，我们需要处理的异步任务就在该函数体内，该函数的两个参数是resolve，reject。异步任务执行成功时调用resolve函数返回结果，反之调用reject。  
Promise对象的then方法用来接收处理成功时响应的数据，catch方法用来接收处理失败时相应的数据。
```js
const promise = new Promise(function(resolve, reject) {
  // 异步处理
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
#### 1.Promise方法
Promise有两个常用的方法：then()、catch()。
##### 1.then()
当Promise执行的内容符合成功条件时，调用resolve函数，失败就调用reject函数。
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
##### 2.catch()
该方法相当于then方法的第二个参数，指向reject的回调函数。但它可以在执行resolve回调函数时，如果出现错误，抛出异常，不会停止运行，而是进入catch方法中。  
另外还有all()、race()、finally，可以前往此[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)查阅学习。
### 3.async/await
Promise异步编程虽然解决了回调带来的回调地狱问题，但当需要执行多个异步操作时，Promise带来了大量.tnen代码，**async/await**出现的原因便是减少代码量，并看起来更加简洁优雅。当需要处理由多个Promise组成的then链的时候，async/await这种优势就能体现出来了。
```js
takeTimeDelay(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 1), 1000);
    });
}
step1(n) {
    console.log(`step1 = ${n}`);
    return this.takeTimeDelay(n);
}
step2(n) {
    console.log(`step2 = ${n}`);
    return this.takeTimeDelay(n);
}
step3(n) {
    console.log(`step3 = ${n}`);
    return this.takeTimeDelay(n);
}
// Promise实现
_promise() {
    const n = 0;
    this.step1(n)
        .then(time2 => this.step2(time2))
        .then(time3 => this.step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
        });
}
// async实现
async _async() {
    const n = 0
    const value1 =await this.step1(n)
    const value2 =await this.step2(value1)
    const result =await this.step3(value2)
    console.log(`result is ${result}`);
}
//结果
/*
step1 = 0
step1 = 1
step1 = 2
result is 3
*/
```
结果两者是一样的，但是利用async/await实现显然要清晰方便很多，看上去几乎跟同步代码一样。  
async定义一个函数为异步函数，如果async函数中有返回值，内部会调用Promise.resolve()方法把它转化成一个promise对象作为返回，若函数没有返回值，则返回undefined。
await关键字会暂停当前的异步函数，等待异步操作完成，但不会阻塞外部代码，不会阻塞事件循环。
```js
//定义asyncFunction
async asyncFunction() {
    return '1'
}
//执行
asyncFunction().then(val => {
    console.log(val)
})
console.log('2')
//结果
2
1
```
因为async函数返回的是Promise对象，因此以下两种代码方式等效：
```js
// 方法1
function _function() {
    return Promise.resolve('Hello');
}
// 方法2
async function _function() {
    return 'Hello';
}
```
想要获取函数的执行结果，就要使用.then()或者.catch()注册回调函数，因此以上两个函数要获取结果的代码为：
```js
this._function1().then(res => {
    console.log(res)
})
```
>async会定义一个函数为异步函数，它若有返回值，将会被封装在Promise对象中返回，如果对返回值通过.then()、.catch()注册了回调函数，该回调会进入任务队列中（微任务）等待同步任务完成才会被调用。  

学习过程中参考了：
[理解异步函数async和await的用法](https://blog.csdn.net/weixin_45811256/article/details/123638582)  
[JS中的一部编程](https://www.bilibili.com/video/BV1WP4y187Tu/?spm_id_from=333.999.0.0&vd_source=7321dad95ddf8d120c28e815bcc771a5)  
[JavaScript代码执行顺序](https://blog.csdn.net/weixin_43242942/article/details/139730533)
