import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';

const CategoryMonthYear = () => {

  let today = new Date();

  const pivot = useNavigate();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  console.log(year);

  const onSearchDate = async () => {
    console.log(month, year);
    pivot(`/CategoryPage/${month}/${year}`);
    window.location.reload();
    }

  return (
    <>
      <form className="CustomDate">
      <label>
        <select className="MonthSelect" onChange={e =>setMonth(e.target.value)}>
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
      </label>
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

export default CategoryMonthYear;