function rowSumOddNumbers(n) {
	// TODO
const newArr = [];
let start = n*(n+1)-1
while (newArr.length != n) {
  newArr.push(start)
  start -= 2
}
return newArr.reduce((sum,cv) => sum+cv, 0)
}