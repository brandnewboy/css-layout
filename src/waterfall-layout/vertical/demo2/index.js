import { html, renderHtml, listEl } from '@/helper'
import { Waterfall } from './waterfall'

/** @type{Styles} **/
import * as styles from './index.i.module.scss'
import './index.scss'

const context = require.context('@/static/waterfall-imgs', false, /\.jpg$/)
let images = context.keys().map(id => {
    return context(id)
})

images = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images]


renderHtml(html`
    <div>
        ${
            listEl(10, (index) => {
                return html`
                    <div class="${styles.test2} ${styles.animated}">
                        其他渲染 -- 任务${index + 1}
                    </div>
                `
            })
        }
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
        el: 'app',
        width: '1000px',
        colNums: 8,
        imgSrcList: images,
        itemClassName: 'animated-img'
    })
    wf.initLayout()
}, { once: true })

