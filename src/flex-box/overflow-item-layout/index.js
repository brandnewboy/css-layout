import './index.scss'
import { listEl } from "@/helper";

document.body.innerHTML = `
    <div class="main">
        ${ listEl(20, index => (`<div>${index}</div>`)) }
    </div>
`
/* ====================================================================================== */