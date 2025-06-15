import './index.scss'
import testImg from './test.jpg'
import { html } from '@/helper'

document.body.innerHTML = html`
    <div class="main">
        <img src="${testImg}" alt="测试图片" />
        <span>自制</span>
        <p>数码热卖中......</p>
    </div>
`
/* ====================================================================================== */
