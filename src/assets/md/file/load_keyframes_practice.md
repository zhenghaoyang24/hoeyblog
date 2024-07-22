**CSS动画是**CSS3的新特性，今天想用动画做一个简单的页面加载动画。  
首先建一个盒子用于装四个小正方形，并用Grid布局让正方形2x2排列。因为要让四个正方形绕中心旋转，则给父元素加上旋转动画，为了让旋转之间有停顿，因此旋转从20再开始。  
为了让四个正方形从中间分散，直接改变父元素<span class="markdown-text-background-color">grid-gap</span>则可实现。最后给正方形在加上<span class="markdown-text-background-color">border-radius</span>看起来就更加和谐了。
```html
<div class="load_keyframes_body">
    <div class="load_keyframes_content">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
```
```css
.load_keyframes_body {
  flex-grow: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.load_keyframes_content {
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  animation: load_transform 1s ease infinite;
}

.load_keyframes_content div {
  border-radius: 10px;
  background-color: #00bbff;
}

@keyframes load_transform {
  0% {
    grid-gap: 10px;
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  50% {
    grid-gap: 40px;
  }
  70% {
    transform: rotate(90deg);
  }
  100% {
    grid-gap: 10px;
    transform: rotate(90deg);
  }
}
```
<video loop autoplay src="../assets/load_keyframes_practice_1.mp4"><video/>
