const { readInput } = require("../utils/array")

const inputArr = readInput(__dirname, "./input.txt")

// constants
const myScore = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3 // Scissors
}
const possibilities = {
  "A X": 3,
  "A Y": 6,
  "A Z": 0,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 6,
  "C Y": 0,
  "C Z": 3
}

// Part 1
const part1 = () => {
  let total = 0
  for (let i = 0; i < inputArr.length; i++) {
    const [opp, me] = inputArr[i].split(" ")
    const roundScore = possibilities[`${opp} ${me}`] + myScore[me]
    total += roundScore
  }
  return total
}

console.log(part1())

// Part 2
const possibilities2 = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7
}

const part2 = () => {
  let total = 0
  for (let i = 0; i < inputArr.length; i++) {
    const [opp, me] = inputArr[i].split(" ")
    const roundScore = possibilities2[`${opp} ${me}`]
    total += roundScore
  }
  return total
}

console.log(part2())