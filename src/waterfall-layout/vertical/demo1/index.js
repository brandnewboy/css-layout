import { html, renderHtml, listEl } from '@/helper'
import * as styles from './index.i.module.scss'
import { Waterfall } from './waterfall'

const context = require.context('@/static/waterfall-imgs', false, /\.jpg$/)
let images = context.keys().map(id => {
    return context(id)
})

images = [...images, ...images, ...images, ...images]



renderHtml(html`
    <div>
        <div id="${styles.app}">
            ${
                    listEl(images, (index, src) => {
                        return html`
                    <div class="${styles.item}">
                        <div class="${styles.box}">
                            <img src="${src}" alt="" />
                            <div class="${styles.label}">随便的标签${index + 1}</div>
                        </div>
                    </div>
                `
                    })
            }
        </div>
    </div>
    
`)

const waterfall = new Waterfall({
    el: 'app',
    itemClassName: 'item',
    styles: {
        colWidth: styles.imgWidth,
        itemGap: '10px'//styles.itemGap
    }
})

window.addEventListener('resize', () => {
    waterfall.reLayout()
})

window.addEventListener('load', () => {
    waterfall.computeColumns()
    waterfall.applyLayout()
})

