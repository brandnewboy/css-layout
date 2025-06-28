import { css } from '@/helper'

// const COLUMN_CSS_TEXT = css`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     gap: ${rowGap}
// `

export class Waterfall {

    /** @type{HTMLElement} **/
    app = null;

    colNums = 0;
    colHeights = []

    /** @type{HTMLCollection | NodeList} **/
    colElementList = null;

    ITEM_DEFAULT_CLASS_NAME = 'wf-item__inner';
    ITEM_IMAGE_DEFAULT_CLASS_NAME = 'wf-item__inner-img';

    imgSrcList = []

    animateClassName = ''

    onload = null

    constructor({
        el = 'app',
        width = '100%',
        imgSrcList = [],
        columnClassName,
        colNums,
        colGap = '10px',
        rowGap = '10px',
        animateClassName,
        onload
    }) {
        this.app = document.getElementById(el)
        if (!this.app) {
            throw new Error('无效的容器元素')
        }
        if (animateClassName) {
            this.animateClassName = animateClassName
        }
        this.app.style.cssText = css`
            width: ${width};
            display: flex;
            gap: ${colGap}
        `
        if (!columnClassName) {
            this.colNums = colNums ? colNums : 0
        }
        if (!onload) {
            this.onload = onload
        }
        this.initColElements()
        this.colHeights = new Array(this.colNums).fill(0)
        this.imgSrcList = imgSrcList

        this.colElementList.forEach(el => {
            el.style.cssText = css`
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: ${rowGap}
            `
        })
    }

    initLayout() {
        this.renderImages().then(() => {
            if (this.onload) {
                this.onload()
            }
            // window.alert('加载完成')
        })
    }

    async renderImages() {
        for (let i = 0; i < this.imgSrcList.length; i++) {
            const div = document.createElement('div')
            div.classList.add(this.ITEM_IMAGE_DEFAULT_CLASS_NAME)
            div.style.cssText = css`
                width: 100%;
            `
            const img = this.createImg(this.imgSrcList[i])
            div.appendChild(img)
            if (i < this.colNums) {
                await this.decodeImgAndUpdate(i, div)
            } else {
                const { order } = this.findMinHeight()
                await this.decodeImgAndUpdate(order, div)
            }
        }
    }

    async decodeImgAndUpdate(index, imgContainer) {
        const currentColumn = this.colElementList[index]
        currentColumn.appendChild(imgContainer)
        await imgContainer.children[0].decode()
        const boxHeight = imgContainer.offsetHeight
        this.colHeights[index] += boxHeight
    }


    findMinHeight() {
        let res = this.colHeights[0]
        let index = 0
        for (let i = 0; i < this.colHeights.length; i++) {
            if (this.colHeights[i] <= res) {
                res = this.colHeights[i]
                index = i
            }
        }
        return {
            height: res,
            order: index
        }
    }

    getBoxHeight(el) {
        return el.offsetHeight
    }

    createImg(imgSrc) {
        const img = new Image()
        img.src = imgSrc
        img.alt = "图片"
        img.style.cssText = css`
            width: 100%;
            object-fit: cover;
            display: block;
        `
        if (this.animateClassName) {
            img.classList.add(this.animateClassName)
        }
        return img
    }


    initColElements() {
        for (let i = 0; i < this.colNums; i++) {
            const div = document.createElement('div')
            div.classList.add(this.ITEM_DEFAULT_CLASS_NAME)
            this.app.appendChild(div)
        }
        this.colElementList = this.app.querySelectorAll('.' + this.ITEM_DEFAULT_CLASS_NAME)
    }

    getNumFromStyle(src, unit) {
        return Number(src.replaceAll(unit, ''))
    }
}