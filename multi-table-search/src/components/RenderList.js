import React from "react";

const RenderList = ({ data, country, region, capital, subregion }) => {
  const countryName = country.trim().toLowerCase();
  const capitalName = capital.trim().toLowerCase();
  const regionName = region.trim().toLowerCase();
  const subregionName = subregion.trim().toLowerCase();

  if (countryName.length > 0) {
    data = data.filter((element, indx, arr) => {
      return element.country
        .trim()
        .toLowerCase()
        .match(countryName);
    });
  }
  if (capitalName.length > 0) {
    data = data.filter(item => {
      return item.capital
        ? item.capital
            .trim()
            .toLowerCase()
            .match(capitalName)
        : "";
    });
  }
  if (regionName.length > 0) {
    data = data.filter(item => {
      return item.region
        .trim()
        .toLowerCase()
        .match(regionName);
    });
  }
  if (subregion.length > 0) {
    data = data.filter(item => {
      return item.subregion
        .trim()
        .toLowerCase()
        .match(subregionName);
    });
  }
  const tableFields = data.map((element, indx, arr) => {
    return (
      <tr className="data" key={indx}>
        <td>{element.country}</td>
        <td>{element.capital}</td>
        <td>{element.region}</td>
        <td>{element.subregion}</td>
        <td>{element.lat}</td>
        <td>{element.lng}</td>
      </tr>
    );
  });
  return (
    <div className="tableContainer">
      <table className="tableData">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Subregion</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        {tableFields}
      </table>
    </div>
  );
};

export default RenderList;
