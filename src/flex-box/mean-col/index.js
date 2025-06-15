import './index.scss'
import { listEl, html } from "@/helper";

document.body.innerHTML = html`
    <div class="main">
        ${ listEl(6, () => `<div class="main__sub-box"></div>`) }
    </div>
`
/* ====================================================================================== */
