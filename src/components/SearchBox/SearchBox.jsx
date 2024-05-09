import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  const nameFromState = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const name = evt.target.value;
    setInputValue(nameFromState);
    dispatch(changeFilter(name));
  };

  return (
    <div className={css.findContact}>
      <label htmlFor="findContact">Find contacts by name</label>
      <input onChange={handleChange} type="text" id="findContact" />
    </div>
  );
};
export default SearchBox;
