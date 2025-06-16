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