import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuranV2 } from "../apis/QuranApi";
import DetailAyat from "../components/DetailAyat";

const DetailAyatContainer = () => {
  const params = useParams();
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await QuranV2.get(`/surahs/${params.idSurah}`);

        setSurah(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSurah();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="alert alert-warning">
            <div className="alert-body text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <DetailAyat data={surah} />
      )}
    </>
  );
};

export default DetailAyatContainer;
