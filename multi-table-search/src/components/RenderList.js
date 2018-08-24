import React from "react";

const RenderList = props => {
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
      </table>
    </div>
  );
};

export default RenderList;
