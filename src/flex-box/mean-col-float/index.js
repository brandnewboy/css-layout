import './index.scss'
import { listEl, html } from "@/helper";
document.body.innerHTML = html`
    <div class="main">
    <section>
        ${ listEl(5, () => `<div class="main__sub-box"></div>`) }
    </section>
    
    </div>
    <div class="ref"></div>
`
/* ====================================================================================== */
