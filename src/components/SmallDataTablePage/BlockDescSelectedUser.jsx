import React from 'react'
import { connect } from 'react-redux'

const BlockDescSelectedUser = (props) => {
  console.log(props)

  return (
    <React.Fragment>
      {props.smallDataTableUser.map((index, key) => {
        console.log(index.id)
        return index.id === parseInt(props.idSelectedUser) ? (
          <React.Fragment key={key}>
            <p>
              Выбран пользователь <b>{index.firstName}</b>
            </p>
            <p>Описание:</p>
            <p>{index.description}</p>
            <p>
              Адрес проживания: <b>{index.address.streetAddress}</b>
            </p>
            <p>
              Город: <b>{index.address.city}</b>
            </p>
            <p>
              Провинция/штат: <b>{index.address.state}</b>
            </p>
            <p>
              Индекс: <b>{index.address.zip}</b>
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment />
        )
      })}
    </React.Fragment>
  )
}

const mapStateToProps = ({ smallDataTableUserReducer }) => {
  return {
    smallDataTableUser: smallDataTableUserReducer.data,
  }
}
export default connect(mapStateToProps)(BlockDescSelectedUser)
