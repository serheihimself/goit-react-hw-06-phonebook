import React from 'react';
import { filterContact } from '../../redux/boxSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/boxSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const onFilterChange = evt => {
    dispatch(filterContact(evt.target.value));
  };
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

export default Filter;
