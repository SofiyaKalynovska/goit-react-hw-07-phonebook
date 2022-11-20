import { FilterTitle, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filtersSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="search"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </>
  );
};

export default Filter;
