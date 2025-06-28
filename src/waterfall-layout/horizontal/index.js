import {html, listEl, renderHtml} from '@/helper'
import './index.scss'


const context = require.context('@/static/waterfall-imgs', false, /\.jpg$/)
let images = context.keys().map(id => {
    return context(id)
})

renderHtml(html`
    <div class="app">
        ${
            listEl(images, (_, src) => {
                return html`
                    <div class="item">
                        <img src="${src}" alt="" />
                    </div>
                `
            })
        }
    </div>
`)