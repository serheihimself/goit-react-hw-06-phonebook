import React from 'react';
import PropTypes from 'prop-types';
import { filterContact } from '../../redux/boxSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/boxSlice';

function Filter({ value, onFilterChange }) {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  dispatch(filterContact(value));
  return (
    <input
      type="text"
      name="filter"
      value={filterValue}
      onChange={onFilterChange}
      required
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
