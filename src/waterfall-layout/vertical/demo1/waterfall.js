export class Waterfall {

    /** @type {HTMLElement} **/
    app = null;
    appWidth = 0;
    colWidth = 0;
    styles = null;
    items = [];
    columnNums = 0;
    oldColumnNums = 0;
    columnHeights = [];

    constructor({ el = 'app', itemClassName, styles }) {
        this.app = document.getElementById(el)
        if (!this.app) {
            throw new Error('无效的元素')
        }
        if (!itemClassName) {
            this.items = this.app.children
        } else {
            this.items = this.app.querySelectorAll(itemClassName)
        }
        this.styles = styles
        this.colWidth = this.styles ? this.getStyleNum(this.styles, 'colWidth', 'px') : 160
    }

    computeColumns() {
        this.appWidth = this.app.offsetWidth
        // TODO 可以响应式计算设置每列多宽
        const itemGap = this.getStyleNum(this.styles, 'itemGap', 'px') || 0
        const newColumnNums = Math.floor((this.appWidth - itemGap) / this.colWidth)
        if (newColumnNums !== this.oldColumnNums) {
            this.columnNums = newColumnNums
            this.oldColumnNums = this.columnNums
            this.columnHeights = this.getColumnHeights(this.columnNums)
            // console.log('当前可容纳列数：', this.columnNums)
            // console.log('当前各列高度：', this.columnHeights)
            return true
        } else {
            return false
        }
    }

    getColumnHeights(nums) {
        const res = []
        for (let i = 0; i < nums; i++) {
            res[i] = {
                height: this.app.children[i].offsetHeight,
                index: i
            }
        }
        return this.reSort(res)
    }

    applyLayout() {
        if (this.columnHeights.length <= 0) return
        const items = this.app.children
        const itemGap = this.getStyleNum(this.styles, 'itemGap', 'px') || 0
        for (let i = this.columnNums; i < items.length; i++) {
            const { index, height } = this.columnHeights[0]
            const curShortest = items[index]
            const curEl = items[i]
            curEl.style.position = 'absolute'
            curEl.style.left = curShortest.offsetLeft + 'px'
            curEl.style.top = curShortest.offsetTop + curShortest.offsetHeight + 'px'
            this.columnHeights[0] = {
                index: i,
                height: height + curEl.offsetHeight
            }
            this.columnHeights = this.reSort(this.columnHeights)
        }
        this.app.style.height = this.columnHeights[this.columnHeights.length - 1].height + 'px'
    }

    clearOldStyle() {
        for (let i = 0; i < this.app.children.length; i++) {
            this.app.children[i].style = ''
        }
    }

    reLayout() {
        const isNeedReLayout = this.computeColumns()
        if (isNeedReLayout) {
            this.clearOldStyle()
            this.applyLayout()
        }
    }

    reSort(data = this.columnHeights) {
        return data.sort(({ height: h1 }, { height: h2 }) => h1 - h2)
    }

    getStyleNum(styles, key, unit = 'px') {
        if (!(key in styles)) {
            return
        }
        return Number(styles[key].replaceAll(unit, ''))
    }
}