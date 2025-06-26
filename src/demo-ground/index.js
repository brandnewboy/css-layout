import { listEl, parseHTML, html } from '@/helper'
import './index.scss'

function hSwitch() {
    return html`
        <div class="switch-box">
            <div class="switch-handler"></div>
        </div>
    `
}

const template = parseHTML(html`
    <div>
        <h1>Hello World</h1>
        ${ hSwitch() }
    </div>
`).body.firstChild

document.body.appendChild(template)

const switchBtn = document.querySelector('.switch-box')
switchBtn.addEventListener('click', function () {
    this.firstChild.style = 'transform: translateX(22px)'
})