import {
  ERROR_SDATA,
  REQUEST_SDATA,
  SUCCESS_SDATA,
  SORT_ID_UP,
  SORT_ID_DOWN,
  SORT_FIRSTNAME_UP,
} from '../../const'

const initialState = {
  data: [],
  isFetchingSmallData: false,
}

export function smallDataTableUser(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SDATA:
      return {
        ...state,
        isFetchingSmallData: true,
      }
    case SUCCESS_SDATA:
      console.log(action.data, 'this')
      return {
        ...state,
        data: action.data,
        isFetchingSmallData: false,
      }
    case SORT_ID_UP:
      let dataSortUpID = action.data
      for (let i = 0; i < dataSortUpID.length; i++) {
        for (let j = 0; j < dataSortUpID.length - 1 - i; j++) {
          if (
            dataSortUpID[j + 1] !== undefined &&
            dataSortUpID[j].id < dataSortUpID[j + 1].id
          ) {
            let temp = dataSortUpID[j]
            dataSortUpID[j] = dataSortUpID[j + 1]
            dataSortUpID[j + 1] = temp
          }
        }
      }
      return {
        ...state,
        data: dataSortUpID,
      }
    case SORT_ID_DOWN:
      let dataSortDownID = action.data
      for (let i = 0; i < dataSortDownID.length; i++) {
        for (let j = 0; j < dataSortDownID.length - 1 - i; j++) {
          if (
            dataSortDownID[j + 1] !== undefined &&
            dataSortDownID[j].id < dataSortDownID[j + 1].id
          ) {
            let temp = dataSortDownID[j]
            dataSortDownID[j] = dataSortDownID[j + 1]
            dataSortDownID[j + 1] = temp
          }
        }
      }
      dataSortDownID = dataSortDownID.reverse()
      return {
        ...state,
        data: dataSortDownID,
      }

    case SORT_FIRSTNAME_UP:
      let dataSortUpFN = action.data
      let arrFNNonSorted = []
      for (let i = 0; i < dataSortUpFN.length; i++) {
        arrFNNonSorted.push(dataSortUpFN[i])
      }
      console.log(arrFNNonSorted, 'arr')
      return {
        ...state,
        data: action.data,
      }

    case ERROR_SDATA:
      return {
        ...state,
        data: [
          {
            id: 'null',
            email: 'null',
            firstName: 'null',
            lastName: 'null',
            phone: 'null',
            address: 'null',
          },
        ],
        isFetchingSmallData: false,
      }
    default:
      return {
        data: [
          {
            id: 'null',
            email: 'null',
            firstName: 'null',
            lastName: 'null',
            phone: 'null',
            address: 'null',
          },
        ],
      }
  }
}
