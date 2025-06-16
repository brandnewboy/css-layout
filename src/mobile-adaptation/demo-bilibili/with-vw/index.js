import './index.scss'
import { html } from '@/helper'
import Logo from '../images/logo.webp'

const template = new window.DOMParser().parseFromString(html`
    <div class="main">
        <header class="header">
            <div class="header-logo">
                <i class="iconfont icon-BILIBILI"></i>
            </div>
            <div class="header-search">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div class="header-login">
                <a href="#">登录</a>
            </div>
            <div class="header-app">
                <a href="#">下载 App</a>
            </div>
        </header>
    </div>
`, 'text/html').body.firstChild

document.body.appendChild(template)
/* ====================================================================================== */
