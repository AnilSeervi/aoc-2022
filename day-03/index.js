const { readInput } = require("../utils/array")

const inputArr = readInput(__dirname, "./input.txt")

// constants
const alphabetPriority = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const part1 = () => {
  let total = 0
  for (let i = 0; i < inputArr.length; i++) {
    const [firstHalf, secondHalf] = [inputArr[i].slice(0, inputArr[i].length / 2), inputArr[i].slice(inputArr[i].length / 2)]
    const ch = firstHalf.split("").filter(i => secondHalf.includes(i))[0]
    total += alphabetPriority.indexOf(ch)
  }
  return total
}

console.log(part1())

const part2 = () => {
  let total = 0;
  const parts3Arr = []
  for (let i = 0; i < inputArr.length; i += 3) {
    parts3Arr.push([inputArr[i], inputArr[i + 1], inputArr[i + 2]])
  }
  for (let i = 0; i < parts3Arr.length; i++) {
    const longest = [...parts3Arr[i]].sort((a, b) => b.length - a.length)[0]
    const sameChars = [...longest].filter(k => parts3Arr[i].every(j => j.includes(k)))[0]
    total += alphabetPriority.indexOf(sameChars)
  }
  return total
}

console.log(part2())