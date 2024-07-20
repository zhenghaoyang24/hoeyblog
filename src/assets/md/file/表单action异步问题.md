**问题说明：** 若要利用input的自动检测功能（例如 <span class="markdown-text-background-color">required="required"</span> 、<span class="markdown-text-background-color">type="email"</span>），则必须利用form的action执行网络接口，且提交方式为type="submit"，但是action执行网络接口无法接受返回值， 导致无法接收如登录注册功能服务端响应的结果。若舍弃input的自动表单验证，手写每个表单的验证很麻烦，因此要解决利用form提交表单数据无法接收返回数据的问题

**解决方法：** 利用iframe标签将form绑定，返回值将返回位在iframe上的页面，再获取页面中body的内容，即返回数据。

**步骤与代码**

1. 利用iframe标签将form绑定，iframe标签的id要与form标签的target的值相同

```html
<form class="input-form" method="post" action="user/userSignIn" target="signInIframe">
<iframe name="signInIframe" id="signInIframe" style="display: none"></iframe>
```
2. 若不想利用iframe直接显示返回结果，则利用js获取iframe的body的内容，将获取的内容赋值给一个vue创建的变量，则可对返回值进行其他处理
```js
setSignInMsg()  //获取iframe中body的内容
{
    var iframe = document.getElementById("signInIframe")
    var iframeDocument = iframe.contentDocument
    var iframeBody = iframeDocument.body
    this.otherMsg = iframeBody.innerHTML;  //otherMsg 为自己定义的其他变量
}
```
**强调：** 这个过程很有可能发生由于异步导致第一次获取不到iframe的内容，因此可以setTimeout处理。
```js
setTimeout(() => {
    // 对变量进行其他处理
}, 1200);
setTimeout(() => {
    // 获取iframe的body的内容，并赋值给vue创建的变量
}, 500);
```
