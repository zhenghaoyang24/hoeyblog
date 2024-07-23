JS对数组处理提供了许多方法，对目前在开发中经常用到且强大的方法做一个学习总结。
## 1.splice()
**功能**：可以对数组指定位置进行删除增加与替换多个值，并放回一个处理后的新数组。它能够实现<span class="md-self-span">push()</span>、<span class="md-self-span">pup()</span>、<span class="md-self-span">unshift()</span>、<span class="md-self-span">shift()</span>的功能，但区别是<span class="md-self-span">splice()</span>不改变原数组且更加强大。  
**参数**：  
**splice(index,howmany,item1,..., itemX)**  
**index**：添加/删除的元素下标，使用负数可从数组结尾处规定位置。必须。  
**howmany**：要删除的元素个数，为0则不删除元素。必须。  
**item**：向数组中添加的元素，可以为多个。非必须。  
```js
var arr = [1,2,3,4,5]  //原数组
var result = arr.splice(1,2,6,7);
console.log(arr)  //1 2 3 4 5
console.log(result)  //1 6 7 4 5
```
## 2.sort
**功能**：可以对数组元素进行排序，默认排序顺序是根据字符串Unicode码点。  
**语法**：<span class="md-self-span">arr.sort(compareFunction)</span> 。
1. 不指明compareFunction，那么元素会按照转换为的字符串的Unicode位点进行排序。
2. 指明compareFunction，数组将按照compareFunction返回值排序。  
   compareFunction(a, b)小于0，则a排在b前面。  
   compareFunction(a, b)大于0，则a排在b后面。  
   等于0，a b顺序不变，
```js
var a=[4,2,6,1,5,9];
//升序  a-b<=0，则a在前，否则b在前
a.sort(function(a,b){
    return a-b;
})
//降序  b-a<=0，则a在前
a.sort(function(a,b){
    return b-a;
});
```
## 3.foreach map filter every some
<span class="md-self-span">foreach</span>,
<span class="md-self-span">map</span>,
<span class="md-self-span">filter</span>,
<span class="md-self-span">every</span>,
<span class="md-self-span">some</span>
具有相同点：它们都遍历数组，且每次循环时执行传入的回调函数。回调函数为：
```js
function (item,index,array){}
/**
 * item:循环的当前元素
 * index:当前元素下标
 * array:原数组
 * **/
```
### 1.foreach  map
<span class="md-self-span">foreach</span>每次循环执行回调函数，它不改变原数组，且没有返回值。而<span class="md-self-span">map</span>
会根据回调函数返回的处理结果，生成一个新数组。
```js
// 数组和
let sum = 0
let arr = [1, 2, 3, 4, 5]
arr.forEach(item => {
    return sum+=item
})
console.log(sum)  //15
// 数组元素加1
let arr = [1, 2, 3, 4, 5]
const res = arr.map(function (item) {
   return item + 1;
});
console.log("新数组", res);  //[2, 3, 4, 5, 6]
```
### 2.filter
<span class="md-self-span">filter</span>过滤元素，会将满足回调函数条件的元素筛选出来组成为一个新数组。
```js
// 判断偶数
var list = [1, 2, 3, 4, 5];
var res = list.filter(function (item) {
   return item % 2 === 0; // true || false
});
console.log(res);  //[2, 4]
```
### 3.every some
<span class="md-self-span">every</span>与<span class="md-self-span">some</span>有相同之处，它们均根据回调函数判断遍历元素是否符合条件，区别在于
<span class="md-self-span">every</span> **当所有元素满足条件才返回true，否则返回false；而<span class="md-self-span">some</span>则是存在元素满足条件则返回true，否则返回false。**  
```js
let list = [1, 2, 3, 4, 5];
// 判断是否每个元素为偶数
let res_every = list.every(function (item) {
    return item % 2 === 0; // true || false
});
// 判断是否存在元素为偶数
let res_some = list.some(function (item) {
    return item % 2 === 0; // true || false
});
console.log(res_every);  //false
console.log(res_some);  //true
```
## 4.reduce
<span class="md-self-span">reduce</span>相较于其它函数更为复杂。  
**语法**：reduce(callbackFn, initialValue)  
**参数**  ：
   1. **callbackFn**：为数组中每个元素执行的函数。其返回值将作为下一次调用 callbackFn 时的 accumulator 参数。对于最后一次调用，返回值将作为 reduce() 的返回值。该函数被调用时将传入以下参数： 
      1. **accumulator**：上一次调用 callbackFn 的结果。在第一次调用时，如果指定了 initialValue 则为指定的值，否则为 array[0] 的值。  
      2. **currentValue**：当前元素的值。在第一次调用时，如果指定了 initialValue，则为 array[0]的值，否则为array[1]。
      3. **currentIndex**：currentValue 在数组中的索引位置。在第一次调用时，如果指定了 initialValue 则为 0，否则为 1。
      4. **array**：原数组。  

  2. **initialValue(可选)**：用于指定第一次accumulator的值，是否指定则会影响currentValue，currentIndex的值，如上。  

**用法**：
```js
let arr = [4, 3, 1, 6, 8]
const res1 = arr.reduce(function (accumulator, currentValue) {
//由于没有指定initialValue,则第一次调用回调accumulator=4，currentValue=3
    return Math.max(accumulator, currentValue);
});
console.log(res1);  //8
// 指定了由于没有指定initialValue为5，因此第一次回调时，accumulator=5，currentValue=4
const res2 = arr.reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
},5);
console.log(res2);  //8
```
js中还有更多数组处理的函数，学习可查看[此链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)。

