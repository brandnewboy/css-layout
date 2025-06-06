import './index.scss'
import swiper01 from  "@/static/images/swiper01.jpg"
import swiper02 from "@/static/images/swiper02.jpg"
import swiper03 from  "@/static/images/swiper03.jpg"

document.body.innerHTML = `
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="${swiper01}">
                <div class="mask"><h2 class="mask-title showed-h2">腾讯公布二零二五年第一季业绩</h2></div>
            </div>
            <div class="swiper-slide">
                <img src="${swiper02}">
                <div class="mask"><h2 class="mask-title">腾讯启动全球2025全球实习生招聘</h2></div>
            </div>
            <div class="swiper-slide">
                <img src="${swiper03}">
                <div class="mask"><h2 class="mask-title">欢迎使用微信支付</h2></div>
            </div>
        </div>
        
        <div class="swiper-pagination">
            <div class="swiper-pagination-dot swiper-pagination-dot-activate"></div>
            <div class="swiper-pagination-dot"></div>
            <div class="swiper-pagination-dot"></div>
        </div>
        

        <div class="swiper-button-box">
            <div class="swiper-button-prev">
               <i class="iconfont icon-swiper-left"></i>
            </div>
            <div class="swiper-button-next">
                <i class="iconfont icon-swiper-right"></i>
            </div>
        </div>
        
    </div>
`
/* ====================================================================================== */

const EXEC_TYPE = {
    PREV: 'prev',
    NEXT: 'next'
}

const DOT_TYPE = {
    ACTIVATE: 'activate',
    DEACTIVATE: 'deactivate'
}

const dots = document.querySelectorAll('.swiper-pagination-dot');
const swiperEl = document.querySelector('.swiper-wrapper')
const swiperLength = swiperEl.children.length
let index = 0


const changeDot = (index) => {
    const dot = dots[index]

    return (type) => {
        switch (type) {
            case DOT_TYPE.ACTIVATE:
                dot.classList.add('swiper-pagination-dot-activate')
                break;
            case DOT_TYPE.DEACTIVATE:
                dot.classList.remove('swiper-pagination-dot-activate')
                break;
        }
    }
}

const scrollEl = (index = -1) => {
    if (index < 0) return;
    swiperEl.style.transform = `translateX(-${index * 100}%)`
}

const onClickArrow = (type) => {
    if (!type) return;
    const oldIndex = index
    switch (type) {
        case EXEC_TYPE.PREV:
            index = index !== 0 ? index - 1 : 0
            break;

        case EXEC_TYPE.NEXT:
            console.log(swiperLength - 1)
            index = index < swiperLength - 1 ? index + 1 : index
            break;
    }
    if (oldIndex !== index) {
        changeDot(oldIndex)(DOT_TYPE.DEACTIVATE)
        changeDot(index)(DOT_TYPE.ACTIVATE)
    }
    scrollEl(index)
}

const onClickDot = (_, curIndex) => {
    changeDot(index)(DOT_TYPE.DEACTIVATE)
    changeDot(curIndex)(DOT_TYPE.ACTIVATE)
    scrollEl(curIndex)
    index = curIndex
}


dots.forEach((item, index) => {
    item.addEventListener('click', e => {
        onClickDot(e, index, item)
    })
})

document.querySelector('.icon-swiper-left').addEventListener('click', () => {
    onClickArrow(EXEC_TYPE.PREV)
})

document.querySelector('.icon-swiper-right').addEventListener('click', () => {
    onClickArrow(EXEC_TYPE.NEXT)
})

const maskTitles = document.querySelectorAll('.mask-title')

const iObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showed-h2')
        } else {
            entry.target.classList.remove('showed-h2')
        }
    })
}, { threshold: 0.9 })
maskTitles.forEach((item, _) => {
    iObserver.observe(item)
})
