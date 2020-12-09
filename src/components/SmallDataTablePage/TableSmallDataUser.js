import React, { memo, useState, useEffect } from 'react'

export const TableSmallDataUser = memo((props) => {
  console.log(props)
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
      console.log(index)
      if (index !== 'address' && index !== 'description') {
        return (
          <td onClick={logSortBtn} key={key}>
            {index}
          </td>
        )
      } else {
        return <td></td>
      }
    },
  )
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>{upperMainTableSmall32}</tr>
        </thead>
        <tbody>{tableSmall32}</tbody>
      </table>
    </React.Fragment>
  )
})
