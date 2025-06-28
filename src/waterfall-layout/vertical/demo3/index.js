import { html, renderHtml, listEl } from '@/helper'
import './index.scss'

const context = require.context('@/static/waterfall-imgs', false, /\.jpg$/)
let images = context.keys().map(id => {
    return context(id)
})

images = [...images, ...images, ...images]

renderHtml(html`
    <div class="app">
        <h1>标题</h1>
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

