import './index.scss'
import './head.scss'

import { html, parseHTML, listEl } from '@/helper'
import { JueJinLogo, JueJinLogoMobile, VipEntry } from './images'
import ProfilePhoto from './images/profile_photo.webp'

const navList = [
    'AI Coding',
    '沸点',
    '课程',
    '直播',
    '活动',
    'AI刷题',
    'APP',
    '插件'
]

const template = parseHTML(html`
    <div class="page">
        <header class="head">
            <div class="logo">
                <img class="logo-img" src="${JueJinLogo}" alt="logo">
                <img class="logo-mobile" src="${JueJinLogoMobile}" alt="logo">
                
            </div>
            
            <div class="nav">
                <div class="home-page nav-list-item active">首页</div>
                <ul class="nav-list">
                    ${ listEl(navList, (_, navItem) => {
                        return html`<li class="nav-list-item">${navItem}</li>`
                    }) }
                </ul>
            </div>
            
            <div class="head-search">
                <div class="input-box">
                    <input placeholder="搜索稀土掘金" />
                </div>
                <div class="head-search-icon">
                    <i class="iconfont icon-sousuo"></i>
                </div>
            </div>
            
            <div class="creator-center">
                <span>创作者中心</span>
                <div class="icon">
                    <i class="iconfont icon-sanjiao_xia"></i>
                </div>
            </div>
            
            <div class="vip">
                <i class="iconfont icon-huiyuanguanli-copy"></i>
                <span>会员</span>
            </div>
            
            <div class="notify">
                <i class="iconfont icon-xiaoxitongzhi"></i>
            </div>
            
            <div class="profile-photo">
                <img src="${ProfilePhoto}" alt="头像">
            </div>
        </header>
    </div>
`)

document.body.appendChild(template.body.firstChild)