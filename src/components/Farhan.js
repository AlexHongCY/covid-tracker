import React from "react";
import { useState } from "react";

const Farhan = ({ data }) => {
  const [v, setV] = useState("");
  const [searchParamVac] = useState(["age"]);
  const [filterParamV, setFilterParamV] = useState(["All"]);

  function search(data) {
    return data.filter((item) => {
      if (item.age == filterParamV) {
        return searchParamVac.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(v.toLowerCase()) > -1
          );
        });
      } else if (filterParamV == "All") {
        return searchParamVac.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(v.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <>
      <div>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Enter Age"
            value={v}
            onChange={(e) => setV(e.target.value)}
          />
        </label>
      </div>
      <span> Search Age</span>
      <label
        onChange={(e) => {
          setFilterParamV(e.target.value);
        }}
        aria-label="Date"
      >
        <option value="All"></option>
      </label>
      <table>
        <tbody>
          <h3>Number of Vaccinated people based on Age Group</h3>
          <tr>
            <th>Completed Full Regimen</th>
            <th>Age Group</th>
            <th>Unvaccinated</th>
            <th>Atleast One Dose</th>
          </tr>

          {search(data).map((v) => {
            return (
              <tr key={v._id}>
                <td>completed full regimen : {v.completed_full_regimen}</td>
                <td>Age Group : {v.age}</td>
                <td>unvaccinated : {v.unvaccinated}</td>
                <td>At least one dose : {v.at_least_one_dose}</td>
                <br />
              </tr>
            );
          })}

          {/* <form>
        <input type="text" placeholder="Search for date" />
        <button>Search</button>
      </form>
      {data.map((v) => {
        return (
          <div key={v._id}>
            <p>completed full regimen : {v.completed_full_regimen}</p>
            <p>Age Group : {v.age}</p>
            <p>Unvaccinated : {v.unvaccinated}</p>
            <p>At least one dose : {v.at_least_one_dose}</p>
            <br />
          </div>
        );
      })} */}
        </tbody>
      </table>
    </>
  );
};

export default Farhan;
