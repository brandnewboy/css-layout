import './index.css'
import { listEl } from '../helper/index'

/**
 * 要求如下：
 * 1. main盒子，宽高均自适应，带有黑色边框
 * 2. box1粉色盒子，固定宽度100px * 100px
 * 3. box2浅蓝色盒子，高度200px，宽度自适应
 * 4. box1和box1之间间距20px
 */
document.body.innerHTML = `
    <div class="main">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
`
// =====================================