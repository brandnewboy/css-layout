import './index.scss'
import { html, parseHTML, listEl } from '@/helper'

const mediaQueryThresholds = [
    'sm',
    'md',
    'lg',
    'xl',
    'xxl'
]
const template = parseHTML(html`
    <div id="app">
        ${
            listEl(mediaQueryThresholds, (_, item) => {
                const classNames = `col col-${item}-3`
                return html`
                    <div class="row">
                        ${ listEl(4, (index, _) => {
                            return html`<div class="${classNames}"><h3>hello-${item}-${index + 1}</h3></div>`
                        }) }
                    </div>
                `
            })
        }
    </div>
`)

document.body.appendChild(template.body.firstChild)


