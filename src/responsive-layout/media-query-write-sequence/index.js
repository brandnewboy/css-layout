import './index.scss'
import { html, parseHTML } from '@/helper'

const template = parseHTML(html`
    <div id="app">
        <div class="box">Hello World</div>
    </div>
`)

document.body.appendChild(template.body.firstChild)


