import './index.scss'
import { listEl } from "@/helper";

document.body.innerHTML = `
    <div class="main">
        ${ listEl(6, () => `<div class="main__sub-box"></div>`) }
    </div>
`
/* ====================================================================================== */
