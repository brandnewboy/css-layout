import './css-box.css'
import { listEl } from '../helper/index'
document.body.innerHTML = `
    <header class="header">这是头部</header>
    <div class="box1">
        <div class="box2">盒子内容</div>
        <div class="box2">盒子内容</div>
        <div class="box2">盒子内容</div>
        <div class="box2">盒子内容</div>
        <div class="box2">盒子内容</div>
        <div class="box2">盒子内容</div>
    </div>
    
    <div class="box3">绝对定位盒子</div>
    
    <div style="position: relative">
        <div class="parent">
            <div class="inner">
                盒子111
            </div>
        </div>
        <div class="outer">盒子222</div>
    </div>
    
    
    ${ listEl(10, index => (`<div class="box4">盒子内容${index}</div>`)) }
    <div class="user-tip">咨询</div>
`
// =====================================