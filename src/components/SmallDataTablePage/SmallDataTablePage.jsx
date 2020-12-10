import React, { useState, useEffect } from 'react'
import { TableSmallDataUser } from './TableSmallDataUser'

export const SmallDataTablePage = (props) => {
  const [dataUser, setDataUser] = useState(props.smallDataTableUser.data)
  console.log(dataUser)
  useEffect(() => {
    setDataUser(props.smallDataTableUser.data)
    // console.log(props.smallDataTableUser, dataUser)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.smallDataTableUser.data])

  if (props.smallDataTableUser.isFetchingSmallData) {
    return <h1>Загрузка</h1>
  } else if (!props.smallDataTableUser.isFetchingSmallData) {
    return (
      <div>
        <TableSmallDataUser
          SortingSmallData={props.SortingSmallData}
          dataUserSmall={dataUser}
        />
      </div>
    )
  }
}
