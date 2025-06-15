import './index.scss'
import { listEl, html } from "@/helper";

const context = require.context('./images', true, /\.webp$/)

const images = context.keys().map(key => {
    return context(key)
})

document.body.innerHTML = html`
    <div class="main">
    <div class="img-container-left">
        <img src="${images[0]}" alt="image">
    </div>
        ${ listEl(images.length - 3, index => {
            return `<div class="img-container">
                    <img src="${images[index + 1]}" alt="image">
                    <div class="info-container">
                        <h3 class="product-name">Xiaomi Buds 5 Pro</h3>
                        <p class="product-desc">小米首发双功放三单元 | 55db 深度降噪</p>
                        <p class="product-price">
                            <span class="price-exactly">1249元起</span>
                            <del class="price-outdated">1299元</del>
                        </p>
                    </div>
                </div>`
            })
        }
    <div class="img-container-s">
        <img src="${images[8]}" alt="image">
        <div class="info-container">
            <h3 class="product-name">小米手环8 Pro 原神定制版</h3>
            <p class="product-price">
                <span class="price-exactly">549元</span>
            </p>
        </div>
    </div>
    <div class="img-container-more">
        <div>
            <img src="${images[9]}" alt="image">
        </div>
        <div>
            <h3>浏览更多</h3>
            <p>穿戴</p>
        </div>
    </div>
    </div>
`
/* ====================================================================================== */
