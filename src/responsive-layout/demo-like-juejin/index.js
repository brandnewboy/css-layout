import './index.scss'
import './head.scss'
import './main.scss'
import './main-right.scss'
import {html, parseHTML, listEl, deepClone} from '@/helper'
import {JueJinLogo, JueJinLogoMobile, VipEntry} from './images'
import ProfilePhoto from './images/profile_photo.webp'
import ArticleEg from './images/article_eg.webp'
import Adver01 from './images/adver01.png'
import Adver02 from './images/adver02.png'
import Adver03 from './images/adver03.png'
import Author01 from './images/author01.png'
import Author02 from './images/author02.png'
import Author03 from './images/author03.png'
import Author04 from './images/author04.png'
import Author05 from './images/author05.png'

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


let articleList = [
    {
        title: '17.6K star！后端接口零代码的神器来了，腾讯开源的ORM库太强了！',
        content: '🏆 实时零代码、全功能、强安全 ORM 库 🚀 后端接口和文档零代码，前端定制返回 JSON 的数据和结构',
        imgSrc: ArticleEg,
        info: {
            author: '前端CV仔',
            pageViews: '11k',
            likeNums: '17k',
            tags: ['前端', 'Vue.js', 'JavaScript']
        }
    },
    {
        title: '前端性能救星！用 requestAnimationFrame 丝滑渲染海量数据',
        content: '大家好，我是江城开朗的豌豆，一名拥有6年以上前端开发经验的工程师。我精通HTML、CSS、JavaScript等基础前端技术，并深入掌握Vue、React、Uniapp、Flutter等主流框架，能够高效解决各类前端开发问题。在我的技术栈中，除了常见的前端开发技术，我还擅长3D开发，熟练使用Three.js进行3D图形绘制，并在虚拟现实与数字孪生技术上积累了丰富的经验，特别是在虚幻引擎开发方面，有着深入的理解和实践。',
        imgSrc: ArticleEg,
        info: {
            author: '前端CV仔',
            pageViews: '11k',
            likeNums: '17k',
            tags: ['前端', 'Vue.js', 'JavaScript']
        }
    },
    {
        title: '被谷歌插件劝退，我半小时学会了油猴脚本开发',
        content: '很早以前，我就被谷歌扩展商店里的各种插件所吸引，比如能屏蔽广告的 Adblock',
        imgSrc: ArticleEg,
        info: {
            author: '前端CV仔',
            pageViews: '11k',
            likeNums: '17k',
            tags: ['前端', 'Vue.js', 'JavaScript']
        }
    },
    {
        title: '为什么你总抢到几分钱？揭秘大厂常考的微信红包算法',
        content: '"为什么每次抢红包，我都是那个只有几分钱的\'幸运儿\'？"——这可能是许多人的共同疑问。今天我们将揭开微信红包背后的算法奥秘，这也是大厂面试中的高频考点!',
        imgSrc: ArticleEg,
        info: {
            author: '前端CV仔',
            pageViews: '11k',
            likeNums: '17k',
            tags: ['前端', 'Vue.js', 'JavaScript']
        }
    }
]
articleList = [...articleList, ...articleList, ...articleList]

const top5Articles = [
    {title: '并行性能提升300%！LangGraph如何重塑大模型任务编排'},
    {title: '腾讯云掀桌子了！这个免费CDN，国内秒开还无限流量？'},
    {title: '一天 AI 搓出痛风伴侣 H5 程序，前后端+部署通吃，还接入了大模型接口（万字总结）'},
    {title: 'TypeScript 是如何将 enum 转化为 JavaScript 的？'},
    {title: '前端权限系统怎么做才不会写吐？我们项目踩过的 3 套失败方案总结'}
]

const advertisements = [
    {imgSrc: Adver01},
    {imgSrc: Adver02},
    {imgSrc: Adver03},
]

const top5Authors = [
    {
        name: '异常君',
        photo: Author01,
        title: '后端研发'
    },
    {
        name: 'ErpanOmer',
        photo: Author02,
        title: 'Web前端工程师 @跨境'
    },
    {
        name: '恋猫de小郭',
        photo: Author03,
        title: 'Flutter & Dart GDE | 🏆 掘金签约作者'
    },
    {
        name: '京东云开发者',
        photo: Author04,
        title: '技术运营 @京东科技信息技术有限公司'
    },
    {
        name: '石小石Orz',
        photo: Author05,
        title: '前端开发工程师'
    },
]

const top10Topics = [
    {title: '挑战每日一条沸点', dis: '17.9km'},
    {title: 'Trae又更新了?', dis: '17.9km'},
    {title: '创作者训练营', dis: '17.9km'},
    {title: '每日快讯', dis: '17.9km'},
    {title: 'MCP怎么玩', dis: '17.9km'},
    {title: '金石焕教程', dis: '17.9km'},
    {title: '每天一个知识点', dis: '17.9km'},
    {title: '工作中做的亮点', dis: '17.9km'},
    {title: '掘金一周', dis: '17.9km'},
    {title: '新人报到', dis: '17.9km'}
]

const sayHi = () => {
    const msg = ['早上好！', '中午好！', '下午好！', '晚上好！']
    const time = new Date()
    const hour = time.getHours()
    if (hour >= 6 && hour < 12) {
        return msg[0]
    }

    if (hour >= 12 && hour <= 13) {
        return msg[1]
    }

    if (hour > 13 && hour <= 18) {
        return msg[2]
    }

    if (hour > 18 || hour < 6) {
        return msg[3]
    }
}

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
                    ${listEl(navList, (_, navItem) => {
                        return html`
                            <li class="nav-list-item">${navItem}</li>`
                    })}
                </ul>
            </div>

            <div class="head-search">
                <div class="input-box">
                    <input placeholder="搜索稀土掘金"/>
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
                    ${listEl(leftMenus, (index, item) => {
                        const {name, icon} = item
                        let listItemClassNames = 'nav-left-item'
                        if (index === 1) {
                            listItemClassNames += ` active`
                        }
                        const iconClassNames = `iconfont ${icon}`
                        return html`
                            <li class="${listItemClassNames}">
                                <i class="${iconClassNames}"></i>
                                <span>${name}</span>
                            </li>`
                    })}
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
                    ${listEl(articleList, (_, item) => {
                        const {title, content, imgSrc, info} = item
                        const {author, pageViews, likeNums, tags} = info
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
                                                ${listEl(tags, (_, tag) => {
                                                    return html`
                                                        <li class="tag">${tag}</li>`
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <div class="article-img">
                                    <img src="${imgSrc}" alt="文章封面"/>
                                </div>
                            </li>
                            `
                    })}
                </ul>
            </div>
            <aside class="main-right">

                <div class="daily-sign-in">
                    <section class="say-hi">
                        <h3>${sayHi()}</h3>
                        <span>点亮在社区的每一天</span>
                    </section>
                    <button>
                        <span>去签到</span>
                    </button>
                </div>

                <div class="top-article-list">
                    <div class="list-head">
                        <h3>
                            <i class="iconfont icon-wenzhang"></i>
                            文章榜
                        </h3>
                        <div class="right-change">
                            <i class="iconfont icon-huanyihuan"></i>
                            <span>换一换</span>
                        </div>
                    </div>
                    <ul class="top-list">
                        ${
                                listEl(top5Articles, (index, item) => {
                                    const {title} = item
                                    const order = index + 1
                                    const topClassNames = [1, 2, 3].includes(order) ? `top${order}` : 'after-top3'
                                    return html`
                                        <li>
                                            <div class="order ${topClassNames}">${order}</div>
                                            <p>${title}</p>
                                        </li>
                                    `
                                })
                        }
                    </ul>
                    <div class="view-more">
                        查看更多
                        <i class="iconfont icon-zhankai"></i>
                    </div>
                </div>


                <div class="adver-list">
                    <ul>
                        ${listEl(advertisements, (index, item) => {
                            const {imgSrc} = item
                            return html`
                                <li>
                                    <img src="${imgSrc}" alt="广告"/>
                                    <div class="tip">广告
                                        <div/>
                                </li>
                            `
                        })}
                    </ul>
                </div>

                <div class="top-author-list">
                    <div class="list-head">
                        <h3>
                            <i class="iconfont icon-zuozhe"></i>
                            作者榜
                        </h3>
                        <div class="right-change">

                        </div>
                    </div>
                    <ul>
                        ${
                                listEl(top5Authors, (index, item) => {
                                    const {name, photo, title} = item
                                    return html`
                                        <li>
                                            <div class="info">
                                                <div class="photo"><img src="${photo}" alt="头像"/></div>
                                                <div class="base-info">
                                                    <span class="author-name">${name}</span>
                                                    <span class="author-title">${title}</span>
                                                </div>
                                            </div>
                                            <div class="follow">${`+ 关注`}</div>
                                        </li>
                                    `
                                })
                        }
                    </ul>
                    <div class="view-more">
                        查看更多
                        <i class="iconfont icon-zhankai"></i>
                    </div>
                </div>

                <div class="topic-recommendation">
                    <div class="list-head">
                        <h3>
                            推荐话题
                        </h3>
                        <div class="right-change">
                            <i class="iconfont icon-huanyihuan"></i>
                            <span>换一换</span>
                        </div>
                    </div>

                    <ul>
                        ${
                                listEl(top10Topics, (index, item) => {
                                    const {title, dis} = item
                                    return html`
                                        <li>
                                            <i class="iconfont icon-baojian-"></i>
                                            <span>
                                                # ${title} #
                                            </span>
                                            <span>${dis}</span>
                                        </li>
                                    `
                                })
                        }
                    </ul>
                    <div class="view-more">
                        查看更多
                        <i class="iconfont icon-zhankai"></i>
                    </div>
                </div>

            </aside>
        </main>
    </div>
`)

document.body.appendChild(template.body.firstChild)