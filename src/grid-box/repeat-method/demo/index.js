import './index.scss'
import { listEl, html } from '@/helper'

document.body.innerHTML = html`
    <div class="main">
        ${ listEl(11, index => `<div>${index}</div>`) }
    </div>
`
/* ====================================================================================== */
