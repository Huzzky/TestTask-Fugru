import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchRow } from '../../store/action/workWithTable'

const SearchBar = ({ searchRow }) => {
  let [refSearchInput, setRefSearchInput] = React.useState('')
  return (
    <>
      <input
        onChange={(e) => {
          setRefSearchInput(e.currentTarget.value)
        }}
        placeholder="Поиск..."
      ></input>{' '}
      <button onClick={() => searchRow(refSearchInput)}>Найти</button>
    </>
  )
}

SearchBar.propTypes = {
  searchRow: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  searchRow: (enteredString) => dispatch(searchRow(enteredString)),
})

export default connect(null, mapDispatchToProps)(SearchBar)
