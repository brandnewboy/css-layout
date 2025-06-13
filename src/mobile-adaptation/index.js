import './index.scss'
import * as styles from './index.module.scss'
document.body.innerHTML = `
    <div class="main">
        <div class="box">这是内容</div>
        <div class="${styles.blackBox}">这是内容</div>
        <div class="box2">内容</div>
    </div>
`
/* ====================================================================================== */
