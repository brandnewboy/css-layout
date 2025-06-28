import { html, renderHtml } from '@/helper'
import { Waterfall } from '../waterfall'


const context = require.context('@/static/waterfall-imgs', false, /\.jpg$/)
let images = context.keys().map(id => {
    return context(id)
})

images = [...images, ...images, ...images, ...images]


renderHtml(html`
    <div>
        <div id="container"></div>
    </div>
`)

window.addEventListener('load', () => {
    const wf = new Waterfall({
        width: '80%',
        el: 'container',
        imgSrcList: images,
        colNums: 6,
        animateClassName: 'animated-img'
    })
    wf.initLayout()
}, { once: true })

