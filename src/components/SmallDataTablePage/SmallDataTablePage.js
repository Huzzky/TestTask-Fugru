import React, { useState, useEffect, memo } from 'react'
import { TableSmallDataUser } from './TableSmallDataUser'

export const SmallDataTablePage = memo((props) => {
  const [dataUser, setDataUser] = useState(props.smallDataTableUser)

  useEffect(() => {
    setDataUser(props.smallDataTableUser.data)
    // console.log(props.smallDataTableUser, dataUser)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.smallDataTableUser.data])

  if (props.smallDataTableUser.isFetchingSmallData) {
    return <h1>Загрузка</h1>
  } else if (!props.smallDataTableUser.isFetchingSmallData) {
    if (props.smallDataTableUser.data.length < 2) {
      props.getSmallDataTableUser()
      return <h1>123</h1>
    } else if (props.smallDataTableUser.data.length > 2) {
      return (
        <div>
          <TableSmallDataUser dataUserSmall={dataUser} />
        </div>
      )
    }
  }
})
