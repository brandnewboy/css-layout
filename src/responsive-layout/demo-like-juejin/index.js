import './index.scss'
import './head.scss'
import './main.scss'
import { html, parseHTML, listEl, deepClone } from '@/helper'
import { JueJinLogo, JueJinLogoMobile, VipEntry } from './images'
import ProfilePhoto from './images/profile_photo.webp'
import ArticleEg from './images/article_eg.webp'

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

// const leftMenus = [
//     '关注',
//     '综合',
//     '后端',
//     '前端',
//     'Android',
//     'iOS',
//     '人工智能',
//     '开发工具',
//     '代码人生',
//     '阅读',
//     '排行榜'
// ]

const leftMenus = [
    {
        name: '关注',
        icon: 'icon-guanzhuliebiao-shouqi'
    },
    {
        name: '综合',
        icon: 'icon-zonghejianguan_tongjifenxi_nor'
    },
    {
        name: '后端',
        icon: 'icon-houduan'
    },
    {
        name: '前端',
        icon: 'icon-qianduan'
    },
    {
        name: 'Android',
        icon: 'icon-anzhuo'
    },
    {
        name: 'iOS',
        icon: "icon-ios"
    },
    {
        name: '人工智能',
        icon: 'icon-robot-2-fill'
    },
    {
        name: '开发工具',
        icon: 'icon-kaifagongju'
    },
    {
        name: '代码人生',
        icon: 'icon-qingdan'
    },
    {
        name: '阅读',
        icon: 'icon-yuedureading19-copy'
    },
    {
        name: '排行榜',
        icon: 'icon-a-jiangzhuangpaihang'
    }
]

const article = {
    title: '17.6K star！后端接口零代码的神器来了，腾讯开源的ORM库太强了！',
    content: '🏆 实时零代码、全功能、强安全 ORM 库 🚀 后端接口和文档零代码，前端定制返回 JSON 的数据和结构',
    imgSrc: ArticleEg,
    info: {
        author: '前端CV仔',
        pageViews: '11k',
        likeNums: '17k',
        tags: ['前端', 'Vue.js', 'JavaScript']
    }
}

const articleList = new Array(20).fill(0).map(() => {
    return deepClone(article)
})

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
        
        <main class="page-main">
            <nav class="main-left">
                <ul class="nav-left">
                    ${ listEl(leftMenus, (index, item) => {
                        const { name, icon } = item
                        let listItemClassNames = 'nav-left-item'
                        if (index === 1) {
                            listItemClassNames += ` active`
                        }
                        const iconClassNames =  `iconfont ${icon}`
                        return html`
                            <li class="${listItemClassNames}">
                                <i class="${iconClassNames}"></i>
                                <span>${name}</span>
                            </li>`
                    }) }
                </ul>
            </nav>
            <div class="main-content">
                <div class="tab-panel">
                    <ul class="tab-panel-list">
                        <li class="tab-panel-list-item active">推荐</li>
                        <li class="tab-panel-list-item">最新</li>
                    </ul>
                </div>
                <ul class="article-list">
                    ${ listEl(articleList, (_, item) => {
                        const { title, content, imgSrc, info } = item
                        const { author, pageViews, likeNums, tags } = info
                        return html`
                            <li class="article-list-item">
                                <article class="article">
                                    <h3 class="article-title">${title}</h3>
                                    <p class="article-content">${content}</p>
                                    <div class="article-info">
                                        <div class="base-info">
                                            <span class="author">${author}</span>
                                            <span class="divider">|</span>
                                            <span class="page-views">
                                                <i class="iconfont icon-liulanliang"></i>
                                                ${pageViews}
                                            </span>
                                            <span class="like-nums">
                                                <i class="iconfont icon-dianzanliang"></i>
                                                ${likeNums}
                                            </span>
                                            <span class="more-info">
                                                <i class="iconfont icon-gengduo"></i>
                                            </span>
                                        </div>
                                        <div class="tag-info">
                                            <ul class="tag-list">
                                                ${ listEl(tags, (_, tag) => {
                                                    return html`<li class="tag">${tag}</li>`
                                                }) }
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <div class="article-img">
                                    <img src="${imgSrc}" alt="文章封面" />
                                </div>
                            </li>
                        `
                    }) }
                </ul>
            </div>
            <aside class="main-right">
                <h1>右边边栏</h1>
            </aside>
        </main>
    </div>
`)

document.body.appendChild(template.body.firstChild)