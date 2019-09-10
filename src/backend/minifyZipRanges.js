const comparator = (element1, element2) => element1[0] - element2[0]

function minifyZipRanges(input) {
	if (input && input.length === 0) return []
  if (input && input.length === 1) return input
  
	// sort the array based in ascending order on
  // lower bound
	input.sort(comparator)
  
	const output = [input[0]]
  // lower bound
 	let lb = input[0][0]
  // upper bound
  let ub = input[0][1]
  let index = 1, length = input.length
  while (index < length) {
  	let range = input[index]
    let currLb = range[0]
    let currUb = range[1]
    if (currLb < ub) {
    	// overlap detected
      currLb = Math.min(lb, currLb)
      currUb = Math.max(ub, currUb)
      output[output.length - 1] = [currLb, currUb]
    } else {
    	output.push([currLb, currUb])
    }
    lb = currLb
    ub = currUb
  	index++
  }
  return output
}

const input = [[94133,94133], [94200,94299], [94226,94399]]
// const input = [[94133,94133], [94200,94299], [94600,94699]]
const output = minifyZipRanges(input)
console.log(output)