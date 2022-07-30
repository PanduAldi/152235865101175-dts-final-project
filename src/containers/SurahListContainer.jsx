import React, { useState, useEffect } from "react";
import SurahList from "../components/SurahList";
import { QuranId } from "../apis/QuranApi";

const SurahListContainer = () => {
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await QuranId.get("/surah");

        console.log(response);
        setSurah(response.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSurah();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <>
              <div className="alert alert-info">
                <div className="alert-body text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            surah.map((srh) => {
              return (
                <>
                  <div className="col-lg-3 col-xs-6" key={srh.nomor}>
                    <SurahList data={srh} />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default SurahListContainer;
