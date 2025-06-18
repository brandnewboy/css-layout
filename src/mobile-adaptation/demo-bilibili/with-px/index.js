import './index.scss'
import { html } from '@/helper'
import Video from '../images/demo.webp'

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
                <li class="video-item">
                    <div class="video">
                        <img class="video-item-img" alt="视频" src="${Video}" />
                        <span>
                            <span>
                                <i class="iconfont icon-shipinbofangliang"></i>
                                73.7万
                            </span>
                            <span>
                                <i class="iconfont icon-pinglunliang"></i>
                                5591
                            </span>
                        </span>
                    </div>
                    <h3>
                        <a href="#">测试标题测试标题测试标题</a>
                    </h3>
                </li>
                <li class="video-item">
                    <div class="video">
                        <img class="video-item-img" alt="视频" src="${Video}" />
                        <span class="">
                        <span>
                                <i class="iconfont icon-shipinbofangliang"></i>
                                73.7万
                            </span>
                            <span>
                                <i class="iconfont icon-pinglunliang"></i>
                                5591
                            </span>
                    </span>
                    </div>
                    <h3>
                        <a href="#">测试标题测试标题测试标题</a>
                    </h3>
                </li>
                <li class="video-item">
                    <div class="video">
                        <img class="video-item-img" alt="视频" src="${Video}" />
                        <span class="">
                        <span>
                                <i class="iconfont icon-shipinbofangliang"></i>
                                73.7万
                            </span>
                            <span>
                                <i class="iconfont icon-pinglunliang"></i>
                                5591
                            </span>
                    </span>
                    </div>
                    <h3>
                        <a href="#">测试标题测试标题测试标题</a>
                    </h3>
                </li>
                <li class="video-item">
                    <div class="video">
                        <img class="video-item-img" alt="视频" src="${Video}" />
                        <span class="">
                        <span>
                                <i class="iconfont icon-shipinbofangliang"></i>
                                73.7万
                            </span>
                            <span>
                                <i class="iconfont icon-pinglunliang"></i>
                                5591
                            </span>
                    </span>
                    </div>
                    <h3>
                        <a href="#">测试标题测试标题测试标题</a>
                    </h3>
                </li>
                <li class="video-item">
                    <div class="video">
                        <img class="video-item-img" alt="视频" src="${Video}" />
                        <span class="">
                        <span>
                                <i class="iconfont icon-shipinbofangliang"></i>
                                73.7万
                            </span>
                            <span>
                                <i class="iconfont icon-pinglunliang"></i>
                                5591
                            </span>
                    </span>
                    </div>
                    <h3>
                        <a href="#">测试标题测试标题测试标题</a>
                    </h3>
                </li>
            </ul>
        </main>
        
    </div>
`, 'text/html').body.firstChild

document.body.appendChild(template)
/* ====================================================================================== */
