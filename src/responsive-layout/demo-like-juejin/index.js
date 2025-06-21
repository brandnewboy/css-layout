import './index.scss'
import { html, parseHTML } from '@/helper'

const template = parseHTML(html`
    <div class="page">
        <h1>hello world</h1>
    </div>
`)

document.body.appendChild(template.body.firstChild)