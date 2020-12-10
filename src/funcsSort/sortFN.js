export function sortFN(data) {
  let arrFNNonSort = []
  for (let i = 0; i < data.length; i++) {
    arrFNNonSort.push(data[i].firstName)
  }
  let arrFNSort = arrFNNonSort.sort()
  for (let i = 0; i < arrFNSort.length; i++) {
    for (let j = 0; j < arrFNSort.length; j++) {
      if (arrFNSort[i] === data[j].firstName) {
        console.log(arrFNSort[i], data[j].firstName)
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }

  return data
}
