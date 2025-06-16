import './index.scss'
import { html, listEl } from '@/helper'
import BigSwiper from './images/big_swiper.webp'
import ProdS from './images/prod-s.webp'



const mainMenuTitles = [
    {
        title: '手机',
        subMenu: [
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
        ]
    },
    {
        title: '耳机 音响',
        subMenu: [
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
        ]
    },
    {
        title: '电视',
        subMenu: [
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
        ]
    },
    {
        title: '家电',
        subMenu: [
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
        ]
    },
    {
        title: '笔记本 平板 显示器',
        subMenu: [
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
        ]
    },
    {
        title: '出行 穿戴',
        subMenu: [
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
            { title: 'Xiaomi 数字旗舰' },
        ]
    },
]

// TODO 仿小米可收缩菜单
document.body.innerHTML = html`
    <div id="app">
        <div class="main">
            <div class="demo-container">
                <img src="${BigSwiper}" alt="swiper images">
                <section class="menu">
                    <ul class="main-menu">
                        ${ listEl(mainMenuTitles.length, mainIndex => {
                            const menu = mainMenuTitles[mainIndex]
                            const subMenus = menu.subMenu
                            if (subMenus.length > 24 || subMenus.length <= 0) {
                                return html``
                            }
                            return (html`
                                <li class="main-menu-item">
                                    <span>${menu.title}</span>
                                    <i class="iconfont icon-zhankai"></i>
                                    
                                    <ul class="sub-menu">
                                        ${ listEl(subMenus, subIndex => {
                                            const { title } = subMenus[subIndex]
                                            return (html`
                                                <li class="sub-menu-item">
                                                    <img class="prod-img" src="${ProdS}" alt="the small image of the product" />
                                                    <span class="prod-name">${title}</span>
                                                </li>`)
                                        }) }
                                    </ul>
                                    
                                </li>`)
                            }) 
                        }
                    </ul>
                </section>
            </div>
        </div>
    </div>
`
/* ====================================================================================== */
