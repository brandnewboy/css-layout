import { html, renderHtml, listEl } from '@/helper'
import { Waterfall } from './waterfall'

/** @type{Styles} **/
import * as styles from './index.i.module.scss'
import './index.scss'

const context = require.context('@/static/waterfall-imgs', false, /\.jpg$/)
let images = context.keys().map(id => {
    return context(id)
})

images = [...images, ...images, ...images, ...images]


renderHtml(html`
    <div>
        <div class="${styles.test2} ${styles.animated}">
            其他渲染任务
        </div>
        <div id="${styles.app}"></div>
        ${
            listEl(10, (index) => {
                return html`
                    <div class="${styles.test1}"><h1>${index + 1} - Hello World 这是其他渲染任务</h1></div>
                `
            })
        }
    </div>
    
`)

window.addEventListener('load', () => {
    const wf = new Waterfall({
        width: '600px',
        el: 'app',
        imgSrcList: images,
        colNums: 5,
        itemClassName: 'animated-img'
    })
    wf.initLayout()
}, { once: true })

