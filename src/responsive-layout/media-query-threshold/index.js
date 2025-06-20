import './index.scss'
import { html, parseHTML } from '@/helper'

const template = parseHTML(html`
    <div id="app">
        <div class="d-none">Hello World</div>
        <div class="d-sm-none">d-sm-none</div>
        <div class="d-md-none">d-md-none</div>
        <div class="d-lg-none">d-lg-none</div>
        <div class="d-xl-none">d-xl-none</div>
        <div class="d-xxl-none">d-xxl-none</div>
    </div>
`)

document.body.appendChild(template.body.firstChild)


