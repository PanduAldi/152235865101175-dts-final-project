import React from "react";

const DetailSurah = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <label htmlFor="">Nama Surah :</label>
          <h4>
            {data.name} (<i>{data.translation}</i>)
          </h4>

          <label htmlFor="">Jumlah Ayat : </label>
          <h4>{data.numberOfAyahs}</h4>
          <br />
          <label htmlFor="">Deskripsi Singkat : </label>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailSurah;
