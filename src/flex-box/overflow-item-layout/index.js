import './index.scss'
import { listEl, html } from "@/helper";

document.body.innerHTML = html`
    <div class="main">
        ${ listEl(20, index => (`<div>${index}</div>`)) }
    </div>
`
/* ====================================================================================== */