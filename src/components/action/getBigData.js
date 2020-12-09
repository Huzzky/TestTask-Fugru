import { REQUEST_BDATA, SUCCES_BDATA } from '../const'

export function getSmallData() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_BDATA,
    })

    const axios = require('axios')
    axios
      .get(
        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email' +
          '=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      )
      .then((response) => {
        dispatch({
          type: SUCCES_BDATA,
          data: response.data,
        })
      })
  }
}
