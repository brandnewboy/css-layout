export const listEl = (count, el) => {
    if (!count || !el) {
        return ''
    }
    if (Array.isArray(count)) {
        return count.map((item, index) => {
            return el(index, item)
        }).join('')
    }
    return new Array(count).fill(0).map((item, index) => {
        return el(index, item)
    }).join('')
}

export const html = String.raw
export const css = String.raw

export const domParser = new DOMParser()
export const parseHTML = htmlStr => {
    return domParser.parseFromString(htmlStr, 'text/html')
}
export const parseHTMLPlus = htmlStr => {
    return domParser.parseFromString(htmlStr, 'text/html').body.firstChild
}

export const deepClone = source => {
    // TODO deepClone 深拷贝
    return source
}

export const renderHtml = (template) => {
    const htmlContent = parseHTMLPlus(template)
    document.body.appendChild(htmlContent)
}
