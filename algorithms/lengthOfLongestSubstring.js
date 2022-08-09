// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

var lengthOfLongestSubstring = function (s) {
  const slice = new Set();
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    while (slice.has(s[i])) {
      const needToDelete = slice.values().next().value;

      slice.delete(needToDelete);
    }

    slice.add(s[i]);
    longestLength = Math.max(longestLength, slice.size);
  }

  return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
