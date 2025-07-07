function nthFibo(n) {
  if (n === 1) return 0
  let current = 1
  let prev = 0
  for (let i = 2; i < n; i++) {
      let temp = current
      current += prev
      prev = temp
  }
  return current
}