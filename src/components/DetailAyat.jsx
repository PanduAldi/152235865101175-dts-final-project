const DetailAyat = ({ data }) => {
  const number = 1;

  return (
    <>
      <div className="card card-ayat mt-4">
        <div className="card-body">
          {data.number !== number && (
            <>
              <h1 style={{ textAlign: "right" }} className="mt-3">
                {data.bismillah.arab}
              </h1>
              <p>{data.bismillah.translation}</p>
              <hr />
            </>
          )}

          {data.ayahs.map((dt) => {
            return (
              <>
                <h1 style={{ textAlign: "right" }} className="mt-4">
                  {dt.arab}
                </h1>
                <p>{dt.translation}</p>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetailAyat;
