function sortID(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j + 1] !== undefined && data[j].id < data[j + 1].id) {
        let temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp
      }
    }
  }
  return data
}

function sortFN(data) {
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

function sortLN(data) {
  let arrLNNonSort = []
  for (let i = 0; i < data.length; i++) {
    arrLNNonSort.push(data[i].lastName)
  }
  let arrLNSort = arrLNNonSort.sort()
  for (let i = 0; i < arrLNSort.length; i++) {
    for (let j = 0; j < arrLNSort.length; j++) {
      if (arrLNSort[i] === data[j].lastName) {
        console.log(arrLNSort[i], data[j].lastName)
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }

  return data
}

function sortEmail(data) {
  let arrEmailNonSort = []
  for (let i = 0; i < data.length; i++) {
    arrEmailNonSort.push(data[i].email)
  }
  let arrEmailSort = arrEmailNonSort.sort()
  for (let i = 0; i < arrEmailSort.length; i++) {
    for (let j = 0; j < arrEmailSort.length; j++) {
      if (arrEmailSort[i] === data[j].email) {
        console.log(arrEmailSort[i], data[j].email)
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }

  return data
}

function sortPhone(data) {
  let arrPhoneNonSort = []
  for (let i = 0; i < data.length; i++) {
    arrPhoneNonSort.push(data[i].phone)
  }
  let arrPhoneSort = arrPhoneNonSort.sort()
  for (let i = 0; i < arrPhoneSort.length; i++) {
    for (let j = 0; j < arrPhoneSort.length; j++) {
      if (arrPhoneSort[i] === data[j].phone) {
        console.log(arrPhoneSort[i], data[j].phone)
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }

  return data
}

export { sortID, sortFN, sortLN, sortEmail, sortPhone }
