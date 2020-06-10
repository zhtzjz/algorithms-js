function computeSum() {
  const [arr, target] = [...arguments]
  const has = []
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (has[diff] !== undefined) {
      return [has[diff], i]
    }
    has[arr[i]] = i
  }
}

// eslint-disable-next-line
const index = computeSum([2, 11, 7, 6], 9)
console.log(index)
