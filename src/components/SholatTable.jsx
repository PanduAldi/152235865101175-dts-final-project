import React from "react";

const SholatTable = ({ data }) => {
  return (
    <tr>
      <td>{data.tanggal}</td>
      <td>{data.imsak}</td>
      <td>{data.subuh}</td>
      <td>{data.terbit}</td>
      <td>{data.dhuha}</td>
      <td>{data.dzuhur}</td>
      <td>{data.ashar}</td>
      <td>{data.maghrib}</td>
      <td>{data.isya}</td>
    </tr>
  );
};

export default SholatTable;
