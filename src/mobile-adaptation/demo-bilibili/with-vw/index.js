import './index.scss'
import { html, listEl } from '@/helper'
import Video01 from '../images/01.webp'
import Video02 from '../images/02.webp'
import Video03 from '../images/02.webp'

const videoList = [
    {
        img: Video01,
        title: '一个人在看你，你会怎么说？',
        play: '73.7万',
        comment: '5591'
    },
    {
        img: Video02,
        title: '这是一个标题，这是一个标题',
        play: '73.7万',
        comment: '5591'
    },
    {
        img: Video01,
        title: '我在bilibili看视频，我在bilibili看视频',
        play: '73.7万',
        comment: '5591'
    },
    {
        img: Video03,
        title: '什么人都可以成为一个人，我是一个人',
        play: '73.7万',
        comment: '5591'
    },
    {
        img: Video01,
        title: '谁会不想在bilibili看视频',
        play: '73.7万',
        comment: '5591'
    },
    {
        img: Video02,
        title: '不管你是一个人，还是一个群体，你都可以成为一个人',
        play: '73.7万',
        comment: '5591'
    },
    {
        img: Video02,
        title: '每天都是有很多人在看视频，但是我不会',
        play: '73.7万',
        comment: '5591'
    }
]



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
        
        <nav class="nav">
            <ul class="nav-list">
                <li >首页</li>
                <li class="active">动画</li>
                <li>番剧</li>
                <li>国创</li>
                <li>音乐</li>
                <li>舞蹈</li>
                <li>电影</li>
                <li>番剧</li>
                <li>国创</li>
                <li>音乐</li>
            </ul>
            <div class="nav-arrow">
                <i class="iconfont icon-xiangxia"></i>
            </div>
        </nav>
        
        <main class="main-content">
            <ul class="videos">
                ${
                    listEl(videoList, (index, item) => {
                        const { 
                            title,
                            img,
                            play,
                            comment
                        } = item
                        return html`
                            <li class="video-item">
                                <div class="video">
                                    <img class="video-item-img" alt="视频" src="${img}" />
                                    <span>
                                        <span>
                                            <i class="iconfont icon-shipinbofangliang"></i>
                                            ${play}
                                        </span>
                                        <span>
                                            <i class="iconfont icon-pinglunliang"></i>
                                            ${comment}
                                        </span>
                                    </span>
                                </div>
                                <h3>
                                    <a href="#">${title}</a>
                                </h3>
                            </li>
                            `
                    })
                }
            </ul>
        </main>
        
    </div>
`, 'text/html').body.firstChild

document.body.appendChild(template)
/* ====================================================================================== */
