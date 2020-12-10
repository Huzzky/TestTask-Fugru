export function sortID(data) {
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
