const lengthOfLongestSubstring = function (s) {
  const hash = {}
  let start = 0
  let ans = 0

  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]

    if (!hash[item]) {
      hash[item] = true
    } else {
      // item 已经在 substring 中存在了
      //不断循环找到之前哪一个和它重复了
      for (;;) {
        if (s[start] === item) {
          //找到之前那个的索引了，再加1表示从新开始的子序列第一位的索引
          start++
          break
        }
        //start从0开始，不相同，start加1继续找
        hash[s[start]] = false
        start++
      }
    }
    //ans是之前的最长子序列，i-start再加1是继续往后找的子序列，取最大值
    ans = Math.max(ans, i - start + 1)
  }
  return ans
}
const result = lengthOfLongestSubstring('abcabcbb')
//本例子中，首先是abc，然后bca，最后abc，bc, cb, b最终最长子序列的长度就是3
console.log(result)
