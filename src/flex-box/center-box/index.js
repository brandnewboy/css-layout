// import './index.scss'
import './demo.scss'
import { listEl, html } from '@/helper'
// document.title = '居中一个div'
// document.body.innerHTML = `
//     <div class="main">
//         <div class="main__sub-box"></div>
//     </div>
//
// `
/* ====================================================================================== */

document.title = '不定项居中'
document.body.innerHTML = html`
    <div class="main">
        ${ listEl(6, () => (`<div class="main__sub-box"></div>`)) }
    </div>
`
/* ====================================================================================== */
