function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) sortedArr.push(left.shift())
        else sortedArr.push(right.shift())
    }

    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid   = Math.floor(arr.length / 2)
    let left  = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

mergeSort([3, 5, 8, 5, 99, 1]) // [1, 3, 5, 5, 8, 99]