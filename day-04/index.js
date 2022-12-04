const { readInput } = require("../utils/array")

const inputArr = readInput(__dirname, "./input.txt")

const inputPairArr = inputArr.map((input) => input.split`,`)

const part1 = () => {
  let total = 0;
  for (let i = 0; i < inputPairArr.length; i++) {
    const [firstPair, secondPair] = inputPairArr[i]
    const [firstPairMin, firstPairMax] = firstPair.split`-`.map(Number)
    const [secondPairMin, secondPairMax] = secondPair.split`-`.map(Number)
    if (firstPairMin <= secondPairMin && firstPairMax >= secondPairMax || firstPairMin >= secondPairMin && firstPairMax <= secondPairMax) {
      total += 1
    }
  }
  return total
}

console.log(part1())

const part2 = () => {
  let total = 0;
  for (let i = 0; i < inputPairArr.length; i++) {
    const [firstPair, secondPair] = inputPairArr[i]
    const [firstPairMin, firstPairMax] = firstPair.split`-`.map(Number)
    const [secondPairMin, secondPairMax] = secondPair.split`-`.map(Number)
    if (secondPairMin <= firstPairMax && secondPairMax >= firstPairMax || secondPairMin <= firstPairMax && secondPairMin >= firstPairMin || secondPairMax >= firstPairMin && secondPairMax <= firstPairMax || firstPairMin >= secondPairMin && firstPairMin <= secondPairMax) {
      total += 1
    }
  }
  return total
}

console.log(part2())