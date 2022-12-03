const { readInput } = require("../utils/array")

const calArr = readInput(__dirname, "./input.txt")

let count = 0
const totalsCalsArr = calArr.reduce((acc, curr) => {
	if (curr === "") {
		acc.push(Number(count))
		count = 0
		return acc
	}
	const num = parseInt(curr)
	count += num
	return acc
}, [])

const sortedTotalsCalsArr = [...totalsCalsArr].sort((a, b) => (a > b ? -1 : 1))
const maxCal = sortedTotalsCalsArr[0]
const top3MaxCals = sortedTotalsCalsArr
	.slice(0, 3)
	.reduce((acc, curr) => acc + curr, 0)

console.log(maxCal)
console.log(top3MaxCals)
