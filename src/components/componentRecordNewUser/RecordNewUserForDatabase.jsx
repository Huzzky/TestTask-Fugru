import React, { useState, useEffect } from 'react'
import { tableSortingFields } from '../../const'
import { validationEnteringData } from '../../utils/checkValidationEnteringData'
import ButtonSendNewUserInDB from './ButtonSendNewUserInDB'

export const RecordNewUserForDatabase = () => {
  const [updateComponent, setUpdateComponent] = useState(false)
  const [id] = useState(Date.now())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [reservePhone, setReservePhone] = useState('')

  useEffect(() => {}, [updateComponent])

  const typeDefinition = (key) => {
    return key === 'firstName' || key === 'lastName'
      ? 'text'
      : key === 'email'
      ? 'email'
      : 'tel'
  }

  const funcSetUpdateComponent = () => {
    setUpdateComponent(true)
  }

  const setValidated = (value, key) => {
    if (key === 'firstName') {
      setFirstName(value)
    } else if (key === 'lastName') {
      setLastName(value)
    } else if (key === 'email') {
      setEmail(value)
    } else if (key === 'phone') {
      setPhone(value)
    }
  }

  const transformPhone = (phone, event) => {
    let arrPhoneNumbers = phone.split('')
    arrPhoneNumbers.splice(0, 0, '(')
    arrPhoneNumbers.splice(4, 0, ')')
    arrPhoneNumbers.splice(8, 0, '-')
    event.currentTarget.value = arrPhoneNumbers.join('')
    setPhone(arrPhoneNumbers.join(''))
  }

  const addBrackAndDashToNumber = (event) => {
    if (
      event.currentTarget.type === 'tel' &&
      event.currentTarget.value.length === 10
    ) {
      if (!isNaN(+event.currentTarget.value)) {
        setReservePhone(event.currentTarget.value)
        transformPhone(event.currentTarget.value, event)
      }
    } else if (isNaN(+event.currentTarget.value)) {
      event.currentTarget.value.split('').find((charInNumber) => {
        if (
          charInNumber === '(' ||
          charInNumber === ')' ||
          charInNumber === '-'
        ) {
          transformPhone(reservePhone, event)
        }
        return ''
      })
    } else if (event.currentTarget.length > 9) {
      event.currentTarget.value = reservePhone
      transformPhone(reservePhone, event)
    }
  }

  return (
    <tr>
      {Object.entries(tableSortingFields).map(([key, value]) => {
        return (
          <td key={key}>
            {value === 'Id' ? (
              <input value={id} disabled></input>
            ) : (
              <input
                type={typeDefinition(key)}
                onChange={(event) => {
                  validationEnteringData(
                    event.currentTarget.value,
                    event.currentTarget.type,
                    setValidated,
                    key,
                  )
                }}
                onBlur={(event) => {
                  addBrackAndDashToNumber(event)
                }}
                onClick={(event) => {
                  if (event.currentTarget.type === 'tel') {
                    event.currentTarget.value = reservePhone
                  }
                }}
              ></input>
            )}
          </td>
        )
      })}
      <td>
        <ButtonSendNewUserInDB
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          setUpdateComponent={funcSetUpdateComponent}
        />
      </td>
    </tr>
  )
}
