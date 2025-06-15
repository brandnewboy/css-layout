export const listEl = (count, el) => {
    if (!count || !el) {
        return ''
    }
    return new Array(count).fill(0).map((item, index) => {
        return el(index, item)
    }).join('')
}

export const html = String.raw