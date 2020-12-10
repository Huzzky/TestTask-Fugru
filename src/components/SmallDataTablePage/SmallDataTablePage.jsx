import React, { useState, useEffect } from 'react'
import { TableSmallDataUser } from './TableSmallDataUser'

export const SmallDataTablePage = (props) => {
  const [dataUser, setDataUser] = useState(props.smallDataTableUser.data)
  // console.log(props.smallDataTableUser.isFetchingSmallData)
  useEffect(() => {
    props.getSmallDataTableUser()

    setDataUser(props.smallDataTableUser.data)
  }, [props.smallDataTableUser.isLoaded])
  // console.log(dataUser, 'dataUser')

  if (props.smallDataTableUser.isFetchingSmallData) {
    return <h1>Загрузка</h1>
  } else if (!props.smallDataTableUser.isFetchingSmallData) {
    return (
      <div>
        <TableSmallDataUser
          getSmallDataTableUser={props.getSmallDataTableUser}
          SortingSmallData={props.SortingSmallData}
          dataUserSmall={dataUser}
        />
      </div>
    )
  }
}
