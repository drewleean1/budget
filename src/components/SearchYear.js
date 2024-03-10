import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchYear = () => {

  const pivot = useNavigate();

  const [year, setYear] = useState(2024);

  const onSearchDate = async () => {
    pivot(`/BarGraph//${year}`);
    window.location.reload();
  }

  return (
    <>
      <form className="CustomDate">
      <label>
        <select className="YearSelect" onChange={e =>setYear(e.target.value)}>
            <option value="">Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
        </select>
      </label>
      <button
            type="button"
            id="search"
            onClick={onSearchDate}
            >Search</button>
      </form>
      
    </>
  );
}

export default SearchYear;