const _ = require('lodash')
let arr = []
const min = 8
const max = 12

for (let i = 0; i < 30; i++) {
  arr[i] = _.round(min + (Math.random() % (max - min + 1)), 2)
}

console.log(arr)
