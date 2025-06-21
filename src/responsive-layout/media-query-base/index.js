import './index.scss'
import { html, parseHTML } from '@/helper'

const template = parseHTML(html`
    <div id="app">
        <div class="box">Hello World</div>
    </div>
`)

document.body.appendChild(template.body.firstChild)

// const mediaQueryLink = document.createElement('link')
// mediaQueryLink.rel = 'stylesheet'
// mediaQueryLink.href = 'outside-style.scss'
// mediaQueryLink.media = '(max-width: 600px)'
// document.head.appendChild(mediaQueryLink)

