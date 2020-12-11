import React from 'react'
import { tableSortingFields } from '../../const'

export const EnterNewUserForDatabase = () => {
  const typeDefinition = (key) => {
    return key === 'firstName' || key === 'lastName'
      ? 'text'
      : key === 'email'
      ? 'email'
      : 'tel'
  }

  return (
    <tr>
      {Object.entries(tableSortingFields).map(([key, value]) => {
        return (
          <td key={key}>
            {value === 'Id' ? (
              <input value={Date.now()} disabled></input>
            ) : (
              <input
                type={typeDefinition(key)}
                onChange={(event) => console.log(event.currentTarget.type)}
              ></input>
            )}
          </td>
        )
      })}
      <td>
        <button>Отправить</button>
      </td>
    </tr>
  )
}
