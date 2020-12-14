import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchRow } from '../../store/action/workWithTable'

const ComponentSearchBar = ({ searchRow }) => {
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

ComponentSearchBar.propTypes = {
  searchRow: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  searchRow: (enteredString) => dispatch(searchRow(enteredString)),
})

const SearchBar = memo(ComponentSearchBar)

export default connect(null, mapDispatchToProps)(SearchBar)
