const fs = require("fs")
const path = require("path")

const readInput = (dir, filename) => {
  const input = fs.readFileSync(path.join(dir, filename), "utf8")
  return input.split("\n")
}

module.exports = {
  readInput,
}