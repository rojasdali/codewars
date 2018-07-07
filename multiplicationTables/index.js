function multiplicationTable(row,col){
  //your code here
const myTable = []
  for (let i = 1; i<=row; i++) {
    const myArr = []
    for (let j =1; j <= col; j++){
      myArr.push(j*i)
    }
    myTable.push(myArr)
  }
  return myTable
}