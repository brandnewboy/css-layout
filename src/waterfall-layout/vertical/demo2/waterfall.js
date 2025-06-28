const css = String.raw

export class Waterfall {

    /** @type{HTMLElement} **/
    app = null;

    colNums = 0;

    colHeights = [];

    /** @type{HTMLCollection | NodeList} **/
    colElementList = null;

    ITEM_DEFAULT_CLASS_NAME = 'wf-item__inner';

    ITEM_IMAGE_DEFAULT_CLASS_NAME = 'wf-item__inner-img';

    imgSrcList = [];

    itemClassName = '';

    onload = null;

    lazyObserver = null;

    constructor({
        el = 'app',
        width = '100%',
        imgSrcList = [],
        columnClassName,
        colNums,
        colGap = '10px',
        rowGap = '10px',
        itemClassName,
        onload
    }) {
        this.app = document.getElementById(el)

        if (!this.app) {
            throw new Error('无效的容器元素')
        }

        this.app.style.cssText = css`
            width: ${width};
            display: flex;
            gap: ${colGap}
        `

        if (itemClassName) {
            this.itemClassName = itemClassName
        }

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

        this.lazyObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    if (this.itemClassName) {
                        img.classList.add(this.itemClassName)
                    }
                    observer.unobserve(img)
                }
            })
        })
    }

    initLayout() {
        this.renderImages().then(() => {
            if (this.onload) {
                this.onload()
            }
        })
    }

    async renderImages() {
        for (let i = 0; i < this.imgSrcList.length; i++) {
            const div = this.createImageItemContainer()
            const img = this.createImg(this.imgSrcList[i])
            div.appendChild(img)

            this.lazyObserver.observe(div)

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

    createImg(imgSrc) {
        const img = new Image()
        img.src = imgSrc
        img.alt = "图片"
        img.style.cssText = css`
            width: 100%;
            object-fit: cover;
            display: block;
        `
        return img
    }

    createImageItemContainer() {
        const div = document.createElement('div')
        div.classList.add(this.ITEM_IMAGE_DEFAULT_CLASS_NAME)
        div.style.cssText = css`
                width: 100%;
            `
        return div
    }


    initColElements() {
        for (let i = 0; i < this.colNums; i++) {
            const div = document.createElement('div')
            div.classList.add(this.ITEM_DEFAULT_CLASS_NAME)
            this.app.appendChild(div)
        }
        this.colElementList = this.app.querySelectorAll('.' + this.ITEM_DEFAULT_CLASS_NAME)
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

}