import './index.scss'
import { listEl } from "@/helper";
document.body.innerHTML = `
    <div class="main">
    <section>
        ${ listEl(5, () => `<div class="main__sub-box"></div>`) }
    </section>
    
    </div>
    <div class="ref"></div>
`
/* ====================================================================================== */
