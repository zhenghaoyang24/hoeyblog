v-model是如何实现的？在看了[Vue3官方文档](https://cn.vuejs.org/guide/essentials/forms.html)后了解了<span class="md-self-span">v-model</span>是一个**语法糖**。同时了解到了<span class="md-self-span">.sync</span>修饰符。
> 你可以用 v-model 指令在表单&lt;input>、&lt;textarea> 及 &lt;select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
  
在组件双向绑定中，<span class="md-self-span">props</span>不允许子组件自己进行修改，需要父组件来修改后传给子组件。子组件通过<span class="md-self-span">$emit</span>通知父组件更改数据，父组件通过<span class="md-self-span">:props</span>传给子组件。  
例如，父子组件中均有一个input来更改同一个数据：
```html
<!--父组件中-->
<ChildInput :childValue="fatherValue" @changeChildValue="fatherValue = $event"></ChildInput>
<!--子组件中-->
<!--props为childValue-->
<input type="text" :value="childValue" @input="changeChildValue">
```
```js
changeChildValue(e) {   //子组件通过$emit通知父组件 更改数据
    this.$emit('changeChildValue',e.target.value)
}
```
由于<span class="md-self-span">v-model</span>是一个语法糖，它等同于<span class="md-self-span">:value</span>与<span class="md-self-span">@input</span>。
因此只需要将子组件中props改为value，监听函数changeChildValue改为input，则可直接用v-model替换。
```html
<ChildInput :value="fatherValue" @input="fatherValue = $event"></ChildInput>
<input type="text" :value="value" @input="changeChildValue">
```
```js
changeChildValue(e)
{
    this.$emit('input',e.target.value)
}
```
父子组件替换后代码为:
```html
<ChildInput v-model="fatherValue"></ChildInput>
<input type="text" :value="value" @input="$emit('input',$event.target.value)">
```
这里有两个注意事项：  
1.若需要用v-model进行父子组件双向绑定，那么子组件props值必须为value，通知emit第一个参数必须为input。  
2.在函数里用emit因写为<span class="md-self-span">this.$emit</span>
同样的v-model也可以用于<span class="md-self-span">&lt;select></span>中，只需要将子组件emit第一个参数给位change。  
>文本类型的 &lt;input> 和 &lt;textarea> 元素会绑定 value property 并侦听 input 事件；
&lt;input type="checkbox"> 和 &lt;input type="radio"> 会绑定 checked property 并侦听 change 事件；
&lt;select> 会绑定 value property 并侦听 change 事件。

在非表单中同样可以简化代码实现双向绑定，则是用<span class="md-self-span">.sync</span>修饰符。
使用<span class="md-self-span">.sync</span>则需注意：  
1. 子组件触发事件，事件名格式必须是<span class="md-self-span">update:propsValue</span>，用<span class="md-self-span">$emit</span>函数触发
2. 父组件中子组件为<span class="md-self-span">:propsValue.sync="isShow"</span>。
