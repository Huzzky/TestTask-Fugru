import React from 'react'
import { tableSortingFields } from '../../const'

export const EnterNewUserForDatabase = () => {
  return Object.entries(tableSortingFields).map(([key, value]) => {
    return (
      <td key={key}>
        {value === 'Id' ? (
          <input value={Date.now()} disabled></input>
        ) : (
          <input onClick={() => console.log(value)}></input>
        )}
      </td>
    )
  })
}
