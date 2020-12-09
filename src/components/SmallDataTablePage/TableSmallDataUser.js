import React, { memo, useState, useEffect } from 'react'

export const TableSmallDataUser = memo((props) => {
  const logSortBtn = (event) => {
    console.log(event.target.innerHTML)
  }
  let tableSmall32 = props.dataUserSmall.map((index, key) => {
    return (
      <tr key={key}>
        <td>{index.id}</td>
        <td>{index.firstName}</td>
        <td>{index.lastName}</td>
        <td>{index.email}</td>
        <td>{index.phone}</td>
      </tr>
    )
  })

  let upperMainTableSmall32 = Object.keys(props.dataUserSmall[0]).map(
    (index, key) => {
      if (index !== 'address' && index !== 'description') {
        return (
          <td onClick={logSortBtn} key={key}>
            {index}
          </td>
        )
      } else {
        return null
      }
    },
  )
  return (
    <React.Fragment>
      <table>
        <tr>{upperMainTableSmall32}</tr>
        {tableSmall32}
      </table>
    </React.Fragment>
  )
})
