export const listEl = (count, el) => {
    return new Array(count).fill(0).map((item, index) => {
        return el(index)
    }).join('')
}

export const html = String.raw