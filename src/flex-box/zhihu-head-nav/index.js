import './index.scss'
import logo from '@/static/images/zhihu-logo.png'

document.body.innerHTML = `
    <header>
        <div class="wrapper">
            <section class="logo">
                <img src="${logo}" alt="zhihu-logo"></img>
            </section>
            <ul class="nav-list">
                <li>首页</li>
                <li>会员</li>
                <li>发现</li>
                <li>等你来答</li>
            </ul>
            
            <section class="search-container">
                <input type="text" class="search-input" placeholder="520文案">
                <i class="iconfont icon-sousuo"></i>
            </section>
            
            <section class="header-btn">
                <button class="login-btn">登录</button>
                <button class="join-btn">加入知乎</button>
            </section>
        </div>
    </header>
`
/* ====================================================================================== */
