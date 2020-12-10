import request from '../utils/request'

export const fetchData = ({ rows }) =>
  request({
    url: '/',
    method: 'get',
    params: {
      rows,
      id: '{number|1000}',
      firstName: '{firstName}',
      lastName: '{lastName}',
      email: '{email}',
      phone: '{phone|(xxx)xxx-xx-xx}',
      address: '{addressObject}',
      description: '{lorem|32}',
    },
  })
