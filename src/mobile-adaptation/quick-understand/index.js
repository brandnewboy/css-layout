import './index.scss'
import * as remStyles from './rem.module.scss'
import * as pxStyles from './px.module.scss'

/**
 * 测试rem和px的区别
 * 基本信息：
 * 1. 设计稿尺寸：350px， 1rem = 100px
 * 2. 设计稿字体大小：16px/0.16rem
 * 运行起来后,不断调整浏览器的缩放比例，观察rem和px的区别
 * 结论：
 * 1. rem的大小会随着浏览器的缩放比例而变化，而px的大小不会
 * 2. rem的大小会随着设计稿的尺寸而变化，而px的大小不会
 *
 * TODO: CSS Modules样式名字导出的问题：
 * 1.中划线命名不会被转化为驼峰命名(自定义模块导入导出规则)
 * 2.选择哪些样式需要导出(:export { xxx })
 */

console.log('the remStyles:', remStyles)
console.log('the pxStyles:', pxStyles)
document.body.innerHTML = `
    <div class="main">
        <section class="${remStyles.withRem}">
            <h3>with rem:</h3>
            <header class="${remStyles.header}">
                <ul class="${remStyles.headerList}">
                    <li>关注</li>
                    <li class="${remStyles.listItemActive}">推荐</li>
                    <li>热榜</li>
                    <li>精选</li>
                </ul>
            </header>
        </section>
        
        <div class="divider"></div>
        
        <section class="${pxStyles.withPx}">
            <h3>with px:</h3>
            <header class="${pxStyles.header}">
                <ul class="${pxStyles.headerList}">
                    <li>关注</li>
                    <li class="${pxStyles.listItemActive}">推荐</li>
                    <li>热榜</li>
                    <li>精选</li>
                </ul>
            </header>
        </section>
    </div>
`
/* ====================================================================================== */
